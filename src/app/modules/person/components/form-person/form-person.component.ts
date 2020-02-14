import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ErrorStateMatcher} from '@angular/material';
import * as moment from 'moment';
import * as _ from 'lodash';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';

import {AppState, dataActionsPerson} from '../../../person';
import {DataPersonService} from '../../services';



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
      organization: [data.organization.id, [Validators.required]],
      privateNumber: [data.privateNumber, [Validators.required]],
      passportSeries: new FormControl(data.passportSeries, [Validators.required, Validators.pattern('[A-Z]{2}')]),
      passportNumber: new FormControl(data.passportNumber, [Validators.required, Validators.pattern('[0-9]{6}')]),
      devices: this.fb.array([]),
      contacts: this.fb.array([]),

    });

    for (const devices of data) {
      devices.push(
        this.fb.group({
          name: new FormControl(data.devices.name, [
            Validators.required
          ]),
          serialNumber: new FormControl(data.devices.serialNumber, [
            Validators.required
          ]),
          organizationNumber: new FormControl(data.devices.organizationNumber),
          purchaseDate: new FormControl(data.devices.purchaseDate),
          inUse: new FormControl(data.devices.inUse),
          broken: new FormControl(data.devices.broken),
        })
      );
    }

    for (const contacts of data) {
      contacts.push(
        this.fb.group({
          site: new FormControl(data.contacts.site),
          email: new FormControl(data.contacts.email, Validators.email),
          address: this.fb.array([]),
          phones: this.fb.array([]),
        })
      );
    }

    for (const address of data.contacts) {
      address.push(
        this.fb.group({
          country: new FormControl(data.contacts.address.country, [Validators.required]),
          city: new FormControl(data.contacts.address.city, [Validators.required]),
          street: new FormControl(data.contacts.address.street, [Validators.required]),
          streetType: new FormControl(data.contacts.address.streetType),
          houseNumber: new FormControl(data.contacts.address.houseNumber, [Validators.required]),
          entranceNumber: new FormControl(data.contacts.address.entranceNumber),
          apartmentNumber: new FormControl(data.contacts.address.apartmentNumber),
        })
      );
    }

    for (const phones of data.contacts) {
      phones.push(
        this.fb.group({
          prefix: new FormControl(data.contacts.phones.prefix, [Validators.required, Validators.pattern('[0-9]{3}')]),
          code: new FormControl(data.contacts.phones.code, [Validators.required, Validators.pattern('[0-9]{2}')]),
          number: new FormControl(data.contacts.phones.number, [Validators.required, Validators.pattern('[0-9]{7}')]),
          operator: new FormControl(data.contacts.phones.operator),
        })
      );
    }

  }


  trackByFn(index) {
    return index;
  }

  initForm() {
    this.formPerson = this.fb.group({
      name: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      organization: new FormControl('', [Validators.required]),
      privateNumber: new FormControl('', [Validators.required]),
      passportSeries: new FormControl('', [Validators.required, Validators.pattern('[A-Z]{2}')]),
      passportNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
      devices: this.fb.array([]),
      contacts: this.fb.array([]),
    });
  }

  addDevices() {
    const devices = this.formPerson.controls.devices as FormArray;
    devices.push(this.fb.group({
      devices: new FormControl(''),
    }));
  }

  deleteDevices(iD) {
    const devices = this.formPerson.controls.devices as FormArray;
    devices.removeAt(devices.value.findIndex(select => select.id === iD));
  }

  addContact() {
    const contact = this.formPerson.controls.contacts as FormArray;
    contact.push(this.fb.group({
      site: new FormControl(''),
      email: new FormControl('', Validators.email),
      address: this.fb.array([]),
      phones: this.fb.array([]),
    }));
    this.addAddress(0);
  }

  deleteContact(i) {
    const contact = this.formPerson.controls.contacts as FormArray;
    contact.removeAt(contact.value.findIndex(select => select.id === i));
  }

  addPhones(i) {
    const phones = this.formPerson.controls.contacts.controls[i].controls.phones as FormArray;
    // const phones1 = this.formPerson.get('contacts').controls[i].controls.phones as FormArray;
    phones.push(this.fb.group({
      prefix: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
      code: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}')]),
      number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{7}')]),
      operator: new FormControl(''),
    }));
  }

  deletePhones(iP, i) {
    const phones = this.formPerson.controls.contacts.controls[i].controls.phones as FormArray;
    phones.removeAt(phones.value.findIndex(select => select.id === iP));
  }

  addAddress(i) {
    const address = this.formPerson.controls.contacts.controls[i].controls.address as FormArray;
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

  deleteAddress(iA, i) {
    const address = this.formPerson.controls.contacts.controls[i].controls.address as FormArray;
    address.removeAt(address.value.findIndex(select => select.id === iA));
  }

  submit() {
    const deviceObj = this.formPerson.value.devices.map(item => {
      return {id: item.devices};
    });

    const formData = {
      ...this.formPerson.value, organization: {id: this.formPerson.value.organization}, devices: deviceObj,
      birthDate: this.formPerson.value.birthDate ? moment(this.formPerson.value.birthDate).format('DD-MM-YYYY') : ''
    };
    console.log(this.formPerson.value);
    console.log(formData);
    this.showSpinner = true;
    this.service.createPerson(formData)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          console.log(formData);
          this.formPerson.reset();
          this.store.dispatch(new dataActionsPerson.AddPerson(formData));
          this.service.showSuccess('New person successfully created!');
        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
          this.formPerson.reset();
          console.log(err);
        });
  }


}

