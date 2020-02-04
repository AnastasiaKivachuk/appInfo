import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DataDeviceService} from '../../services/data-device.service';
import * as moment from 'moment';
import {dataActions} from '../../store/action';
import {Store} from '@ngrx/store';
import {AppState, dataSelectors} from '../../store';
import {ErrorStateMatcher} from '@angular/material';

class Matcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && control.dirty;
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  matFormFieldMatcher = new Matcher();
  public nameButton = `Create device`;
  public error = this.store.select(dataSelectors.getError);
  public errorMessage = false;
  public showSpinner = false;

  constructor(public service: DataDeviceService,
              private store: Store<AppState>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.error.subscribe(data => {
      console.log(data);
    });

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
    let formData;
    let purchaseDate;
    if (this.myForm.value.purchaseDate) {
      purchaseDate = moment(this.myForm.value.purchaseDate).format('DD-MM-YYYY');
    } else {
      purchaseDate = '';
    }
    formData = {...this.myForm.value, purchaseDate};
    this.showSpinner = true;
    this.service.createDevice(formData).subscribe(addDevice => {
        this.showSpinner = false;
        this.myForm.reset();
        this.store.dispatch(new dataActions.AddDevice(formData));
        this.service.showSuccess('New device successfully created!');

      },
      error => {
        this.store.dispatch(new dataActions.Error('some error'));
        this.myForm.reset();
        this.errorMessage = true;
        this.showSpinner = false;
      });
  }
}
