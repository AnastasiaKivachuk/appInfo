import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import * as _ from 'lodash';

import {DetailsDeviceModel} from '../../models/detailsDevice.model';
import {DataDeviceService} from '../../services/data-device.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public dataDetails: DetailsDeviceModel;
  public updateDetails: DetailsDeviceModel;
  public updateForm: FormGroup;
  public error: string;
  public showSpinner = false;

  constructor(public service: DataDeviceService,
              public router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.service.getDetailsDevice(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: DetailsDeviceModel) => {
        const NullOrDAte = data.purchaseDate ? (moment(data.purchaseDate, 'DD-MM-YYYY').format()) : null;
        this.dataDetails = {...data, purchaseDate: NullOrDAte};
        this.initForm(this.dataDetails);
      });
  }


  initForm(defaultDate: DetailsDeviceModel) {
    this.updateForm = this.fb.group({
      id: [defaultDate.id, [Validators.required]],
      name: [defaultDate.name, [Validators.required]],
      serialNumber: [defaultDate.serialNumber,  [Validators.required]],
      organizationNumber: [defaultDate.organizationNumber],
      purchaseDate: [defaultDate.purchaseDate],
      inUse: [defaultDate.inUse],
      broken: [defaultDate.broken],
    });
  }

  submit() {
    const bodyRequest = {};
    const NullOrDAte = (this.updateForm.value.purchaseDate === null) ? null : moment(this.updateForm.value.purchaseDate).format('DD-MM-YYYY');
    this.updateDetails = {...this.updateForm.value, purchaseDate: NullOrDAte};
    Object.keys(this.dataDetails).forEach(key => {
        if (this.dataDetails[key] !== this.updateDetails[key]) {
          bodyRequest[key] = this.updateDetails[key];
        }
      }
    );
    this.showSpinner = true;
    this.service.editDevice(this.updateDetails.id, bodyRequest).subscribe(() => {
        this.service.showSuccess('Device successfully updated!');
        this.showSpinner = false;
      },
      err => {
        this.error =_.get(err, 'error.message', '\n' +
          '        Can\'t update device');
        this.showSpinner = false;
      });
  }

}
