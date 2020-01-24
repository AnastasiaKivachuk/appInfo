import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataDeviceService} from '../../services/data-device.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(public service: DataDeviceService,
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
    this.service.createDevice(this.myForm.value);
    this.myForm.reset();
    Object.keys(this.myForm.controls).forEach(key => {
      this.myForm.get(key).setErrors(null) ;
    });
  }


}
