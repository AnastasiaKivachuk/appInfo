import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';
import {finalize} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

import {AppState, dataActions} from '../../store/index';
import {DataOrganizationService} from '../../services';
import {OrganizationModel} from '../../models';


class Matcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && control.dirty;
  }
}

@Component({
  selector: 'app-form-organization',
  templateUrl: './form-organization.component.html',
  styleUrls: ['./form-organization.component.css']
})

export class FormOrganizationComponent implements OnInit {
  @Input() data: OrganizationModel;
  formOrganization: FormGroup;
  matFormFieldMatcher = new Matcher();
  public nameButton: string;
  public error: string;
  public showSpinner = false;
  public namePage: string;

  constructor(public service: DataOrganizationService,
              private store: Store<AppState>,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.nameButton = `Update device`;
      this.namePage = 'Update organization';
      this.openDetailsForm(this.data);
    } else {
      this.nameButton = `Create device`;
      this.namePage = 'Create new organization';
      this.initForm();
    }
  }

  openDetailsForm(data) {
    const addressForm = this.fb.array([]);
    this.formOrganization = this.fb.group({
      name: new FormControl(data.name, [Validators.required]),
      ownerForm: new FormControl(data.ownerForm, [
        Validators.required
      ]),
      address: addressForm,
    });

    for (const address of data.address) {
      addressForm.push(
        this.fb.group({
          country: new FormControl(address.country, [Validators.required]),
          city: new FormControl(address.city, [Validators.required]),
          street: new FormControl(address.street, [Validators.required]),
          streetType: new FormControl(address.streetType),
          houseNumber: new FormControl(address.houseNumber, [Validators.required]),
          entranceNumber: new FormControl(address.entranceNumber),
          apartmentNumber: new FormControl(address.apartmentNumber),
        })
      );
    }
  }

  initForm() {
    this.formOrganization = this.fb.group({
      name: new FormControl('', [Validators.required]),
      ownerForm: new FormControl('', [
        Validators.required
      ]),
      address: this.fb.array([]),
    });

  }

  addAddress() {
    const address = this.formOrganization.controls.address as FormArray;
    address.push(this.fb.group({
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      streetType: new FormControl(''),
      houseNumber: new FormControl('', [Validators.required]),
      entranceNumber: new FormControl(''),
      apartmentNumber: new FormControl(''),
    }));
  }


  deleteAddress(iA) {
    const address = this.formOrganization.controls.address as FormArray;
    address.removeAt(address.value.findIndex(select => select.id === iA));
  }

  trackByFn(index) {
    return index;
  }

  submit() {
    this.showSpinner = true;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.update(id);
      return;
    }
    this.create();
  }

  create() {
    this.service.createOrganization(this.formOrganization.value)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          this.store.dispatch(new dataActions.AddOrganization(this.formOrganization.value));
          this.formOrganization.reset();
          this.service.showSuccess('New organization successfully created!');
        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
        });
  }

  update(id) {
    const bodyRequest = {};
    Object.keys(this.data).forEach(key => {
        if (this.data[key] !== this.formOrganization.value[key] &&
          key !== 'address' && key !== 'id') {
          bodyRequest[key] = this.formOrganization.value[key];
        }
        if (key === 'address') {
          const [maxArray, minArray] = [this.formOrganization.value[key], this.data[key]].sort((a, b) => b.length - a.length);
          bodyRequest[key] = maxArray.map((item, index) => {
            if (!minArray[index]) {
              return item;
            }
            return Object.keys(item)
              .filter(key2 => item[key2] !== minArray[index][key2])
              .reduce((acc, key2) => {
                return {...acc, ...{[key2]: this.formOrganization.value[key][index][key2]}};
              }, {id: this.data[key][index].id});
          })
            .filter(item => Object.keys(item).length > 1);
        }
      }
    );
    this.service.editOrganization(bodyRequest, id)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          this.service.showSuccess('Organization successfully updated!');
        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
        });
  }
}
