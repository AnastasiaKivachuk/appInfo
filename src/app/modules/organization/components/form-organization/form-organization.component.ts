import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';

import * as _ from 'lodash';
import {finalize} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material';

import {AppState, dataActions} from '../../store/index';
import {DataOrganizationService} from '../../services';

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
  formOrganization: FormGroup;
  matFormFieldMatcher = new Matcher();
  public nameButton = `Create device`;
  public error: string;
  public showSpinner = false;

  constructor(public service: DataOrganizationService,
              private store: Store<AppState>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
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

  addAddress(i) {
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
    this.service.createOrganization(this.formOrganization.value)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          this.formOrganization.reset();
          this.store.dispatch(new dataActions.AddOrganization(this.formOrganization.value));
          this.service.showSuccess('New organization successfully created!');

        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
          this.formOrganization.reset();
        });
  }
}
