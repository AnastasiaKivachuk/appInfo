import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';

import * as _ from 'lodash';
import {finalize} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material';

import {AppState, dataActions} from '../../../device/store';
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
      serialNumber: new FormControl('', [
        Validators.required
      ]),
      organizationNumber: new FormControl(''),
      purchaseDate: new FormControl(''),
      inUse: new FormControl(false),
      broken: new FormControl(false),
    });
  }

  submit() {
    this.showSpinner = true;
    this.service.createDevice(this.formOrganization.value)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          this.formOrganization.reset();
          this.store.dispatch(new dataActions.AddDevice(this.formOrganization.value));
          this.service.showSuccess('New device successfully created!');

        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
          this.myForm.reset();
        });
  }
}
