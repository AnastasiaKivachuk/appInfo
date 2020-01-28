import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataDeviceService} from '../../services/data-device.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(public service: DataDeviceService) {
  }

  ngOnInit() {
    this.initForm();
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
    formData = {...this.myForm.value, purchaseDate: moment(this.myForm.value.purchaseDate).format('DD-MM-YYYY')};
    this.service.createDevice(formData);
    this.myForm.reset();
    Object.keys(this.myForm.controls).forEach(key => {
      this.myForm.get(key).setErrors(null);
    });
  }
}
