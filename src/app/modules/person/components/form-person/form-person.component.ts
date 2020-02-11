import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ErrorStateMatcher} from '@angular/material';
import * as moment from 'moment';
import * as _ from 'lodash';


import {AppState, dataActionsPerson} from '../../../person/store';
import {DataPersonService} from '../../services/data-person.service';
import {ContactModel, DetailsDeviceModel, DetailsPersonModel, OrganizationModel} from '../../models';
import {ActivatedRoute} from '@angular/router';


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
  public allOrganization: {};
  public allDevice: {};
  public person: any;

  constructor(public service: DataPersonService,
              private store: Store<AppState>,
              private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.service.getDetailsPerson(this.route.snapshot.paramMap.get('id')).subscribe(data => {
        this.person = data;
        this.openDetailsForm(data);
        console.log(this.person);
        console.log(444);
      });
    } else {
      console.log(123);
      this.initForm();
    }

    this.service.getOrganization(1, 30).subscribe((data: { content: {} }) => {
      this.allOrganization = data.content;
    });
    this.service.getDevice(1, 30).subscribe((data: { content: {} }) => {
      this.allDevice = data.content;
    });

  }

  openDetailsForm(data) {
    console.log(data);
    this.formPerson = this.fb.group({
      name: [data.name, [Validators.required]],
      middleName: [data.middleName],
      lastName: [data.lastName, [Validators.required]],
      birthDate: [data.birthDate, [Validators.required]],
      description: [data.description],
      organizationName: [data.organizationName, [Validators.required]],
      privateNumber: [data.privateNumber, [Validators.required]],
      passportSeries: [data.passportSeries, [Validators.required]],
      passportNumber: [data.passportNumber, [Validators.required]],
      deviceName: [data.deviceName],

      contacts: [{
        site: [data.contacts.site],
        email: [data.contacts.email]}],

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

  initForm() {
    // this.formPerson = this.fb.group({
    //   name: new FormControl('', [Validators.required]),
    //   middleName: new FormControl(''),
    //   lastName: new FormControl('', [Validators.required]),
    //   birthDate: new FormControl('', [Validators.required]),
    //   description: new FormControl(''),
    //   organizationName: new FormControl('', [Validators.required]),
    //   privateNumber: new FormControl('', [Validators.required, ]),
    //   passportSeries: new FormControl('', [Validators.required, Validators.pattern('[a-z]{2}')]),
    //   passportNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
    //   deviceName: new FormControl(''),
    //   site: new FormControl(''),
    //   email: new FormControl('', Validators.email),
    //   county: new FormControl('', [Validators.required]),
    //   city: new FormControl('', [Validators.required]),
    //   street: new FormControl('', [Validators.required]),
    //   streetType: new FormControl(''),
    //   houseNumber: new FormControl('', [Validators.required]),
    //   entranceNumber: new FormControl(''),
    //   apartmentNumber: new FormControl(''),
    //   prefix: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
    //   code: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}')]),
    //   number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{7}')]),
    //   operator: new FormControl(''),
    // });
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

      contacts: this.fb.array([]),

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


  addContact() {
    const contact = this.formPerson.controls.contacts as FormArray;
    console.log(contact);
    contact.push(this.fb.group({
      site: new FormControl(''),
      email: new FormControl(''),
    }));
  }


  submit() {
    // const formData = {
    //   name: this.formPerson.value.name,
    //   middleName: this.formPerson.value.middleName,
    //   lastName: this.formPerson.value.lastName,
    //   birthDate: this.formPerson.value.birthDate ? moment(this.formPerson.value.birthDate).format('DD-MM-YYYY') : '',
    //   organization: {id: this.formPerson.value.organizationName},
    //   privateNumber: this.formPerson.value.privateNumber,
    //   passportSeries: this.formPerson.value.passportSeries,
    //   passportNumber: this.formPerson.value.passportNumber,
    //   description: this.formPerson.value.description,
    //   contacts: [{
    //     site: this.formPerson.value.site,
    //     email: this.formPerson.value.email,
    //     address: [{
    //       county: this.formPerson.value.county,
    //       city: this.formPerson.value.city,
    //       street: this.formPerson.value.street,
    //       streetType: this.formPerson.value.streetType,
    //       houseNumber: this.formPerson.value.houseNumber,
    //       entranceNumber: this.formPerson.value.entranceNumber,
    //       apartmentNumber: this.formPerson.value.apartmentNumber
    //     }],
    //     phones: [{
    //       prefix: this.formPerson.value.prefix,
    //       code: this.formPerson.value.code,
    //       number: this.formPerson.value.number,
    //       operator: this.formPerson.value.operator
    //     }],
    //   }],
    //   devices: [{id: this.formPerson.value.deviceName}],
    // };
    console.log(this.formPerson.value);
    // this.showSpinner = true;
    // this.service.createPerson(formData).subscribe(() => {
    //   console.log(formData);
    //     this.showSpinner = false;
    //     this.formPerson.reset();
    //     this.store.dispatch(new dataActionsPerson.AddPerson(formData));
    //     this.service.showSuccess('New person successfully created!');
    //   },
    //   err => {
    //     this.error = _.get(err, 'error.message', 'some error');
    //     this.formPerson.reset();
    //     this.showSpinner = false;
    //     console.log(err);
    //   });
  }
}

