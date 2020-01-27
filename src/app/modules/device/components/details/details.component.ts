import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataDeviceService} from '../../services/data-device.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DetailsDevice} from '../../models/detailsDevice';
import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() data: DetailsDevice;
  public dataDetails: DetailsDevice;
  updateForm: FormGroup;

  constructor(public service: DataDeviceService,
              public router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.service.getDetailsDevice(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: DetailsDevice) => {
        this.dataDetails = data;
        this.initForm(data);
      });

  }

  // initForm(defaultDate) {
  //   this.updateForm = this.fb.group({
  //     name: [defaultDate.name, [Validators.required]],
  //     serialNumber: [defaultDate.serialNumber, [
  //       Validators.required
  //     ]],
  //     organizationNumber: [defaultDate.organizationNumber],
  //     purchaseDate: [moment(defaultDate.purchaseDate, 'DD-MM-YYYY').format()],
  //     inUse: [defaultDate.inUse],
  //     broken: [defaultDate.broken],
  //   });
  //   // this.updateForm.valueChanges.subscribe(data=>console.log(data));
  // }


  initForm(defaultDate) {
    this.updateForm = this.fb.group({
      name: [defaultDate.name, [Validators.required]],
      serialNumber: [defaultDate.serialNumber, [
        Validators.required
      ]],
      organizationNumber: [defaultDate.organizationNumber],
      purchaseDate: [moment(defaultDate.purchaseDate, 'DD-MM-YYYY').format()],
      inUse: [defaultDate.inUse],
      broken: [defaultDate.broken],
    });
    // this.updateForm.valueChanges.subscribe(data=>console.log(data));
  }

  submit() {
    console.log(this.updateForm.value);

    // console.log(moment(this.updateForm.value.purchaseDate));
    // this.service.createDevice(this.updateForm.value);
    // this.initForm();
  }

}
