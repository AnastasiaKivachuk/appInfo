import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {Store} from '@ngrx/store';
import * as _ from 'lodash';
import {finalize} from 'rxjs/operators';

import {dataActions} from '../../store/action';
import {AppState} from '../../store';
import {DataDeviceService} from '../../services';
import {Matcher} from '../../../shared';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  matFormFieldMatcher = new Matcher();
  public error: string;
  public showSpinner = false;

  constructor(public service: DataDeviceService,
              private store: Store<AppState>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
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
    const valuePurchaseDate = this.myForm.value.purchaseDate;
    const purchaseDate = valuePurchaseDate ? moment(valuePurchaseDate).format('DD-MM-YYYY') : '';
    const formData = {...this.myForm.value, purchaseDate};
    this.showSpinner = true;
    this.service.createDevice(formData)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          this.myForm.reset();
          this.store.dispatch(new dataActions.AddDevice(formData));
          this.service.showSuccess('New device successfully created!');

        },
        err => {
          this.error = _.get(err, 'error.message', 'some error');
          this.myForm.reset();
        });
  }
}
