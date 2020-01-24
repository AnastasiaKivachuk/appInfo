import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataDeviceService} from '../../services/data-device.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
    console.log(this.myForm);
    this.service.createDevice(this.myForm.value);
    this.initForm();
  }

}
