import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ErrorStateMatcher} from '@angular/material';
import * as moment from 'moment';
import * as _ from 'lodash';


import {AppState, dataActionsPerson} from '../../../person/store';
import {DataPersonService} from '../../services/data-person.service';
import {OrganizationModel} from '../../models';


class Matcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && control.dirty;
  }
}

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})

export class FormPersonComponent implements OnInit {
  formPerson: FormGroup;
  matFormFieldMatcher = new Matcher();
  public nameButton = `Create device`;
  public error: string;
  public showSpinner = false;
  public allOrganization = [{name: 'LWO'}, {name: '123'}];
  public allDevice = [{name: '123'}, {name: '234'}];

  constructor(public service: DataPersonService,
              private store: Store<AppState>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.service.getOrganization(1,30).subscribe(data => {
    //   this.allOrganization = data;
    // })
    this.initForm();
  }

  initForm() {
    this.formPerson = this.fb.group({
      name: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      organizationName: new FormControl('', [Validators.required]),
      privateNumber: new FormControl('', [Validators.required]),
      passportSeries: new FormControl('', [Validators.required]),
      passportNumber: new FormControl('', [Validators.required]),
      deviceName: new FormControl(''),
      site: new FormControl(''),
      email: new FormControl(''),
      county: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      streetType: new FormControl(''),
      houseNumber: new FormControl('', [Validators.required]),
      entranceNumber: new FormControl(''),
      apartmentNumber: new FormControl(''),
      prefix: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      operator: new FormControl(''),
    });
  }

  submit() {
    const birthDate = this.formPerson.value.birthDate ? moment(this.formPerson.value.birthDate).format('DD-MM-YYYY') : '';
    const formData = {...this.formPerson.value, birthDate};
    console.log(formData);
    this.showSpinner = true;
    // this.service.createPerson(formData).subscribe(() => {
    //     this.showSpinner = false;
    //     this.formPerson.reset();
    //     this.store.dispatch(new dataActionsPerson.AddPerson(formData));
    //     this.service.showSuccess('New person successfully created!');
    //   },
    //   err => {
    //     this.error = _.get(err, 'error.message', 'some error');
    //     this.formPerson.reset();
    //     this.showSpinner = false;
    //   });
  }
}

