import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {DataDeviceService} from '../../services/data-device.service';
import * as moment from 'moment';
import {dataActions} from '../../store/action';
import {Store} from '@ngrx/store';
import {AppState, dataSelectors} from '../../store';
import {ToastrService} from 'ngx-toastr';
import {invalid} from 'moment';
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
  matFormFieldMatcher = new Matcher()

  public error = this.store.select(dataSelectors.getError);
  public errorMessage = false;
  isFetching$ = this.store.select(dataSelectors.getDataStatus);

  constructor(public service: DataDeviceService,
              private store: Store<AppState>,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.initForm();
    this.error.subscribe(data => {
      console.log(data);
    });

  }

  initForm() {
    this.myForm = new FormGroup({
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
    console.log(formData);
    this.service.createDevice(formData).subscribe(addDevice => {
        console.log(formData);
        this.store.dispatch(new dataActions.AddDevice(formData));
        this.service.showSuccess('New device successfully created!');

      },
      error => {
        this.store.dispatch(new dataActions.Error('some error'));
        this.errorMessage = true;
      });

    this.myForm.reset();
    // // this.myForm.get(broken).setErrors(invalid());
    // Object.keys(this.myForm.controls).forEach(key => {
    //   console.log(key);
    //   // console.log(this.myForm.get(key).getError())
    //
    //   // this.myForm.get(broken).setErrors(invalid());
    //   this.myForm.get(key).setErrors(null);
    //   // console.log(this.myForm.get(key));
    //   // console.log(this.myForm.controls['name'].touched);
    //   // this.myForm.controls;
    //   // if (key === 'broken') {
    //   //   this.myForm.get(key).setErrors(invalid());
    //   // }
    // });
    // this.initForm();
    // // Object.keys(this.myForm.controls).forEach()
  }


}
