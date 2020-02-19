import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import * as _ from 'lodash';
import {finalize} from 'rxjs/operators';

import {DetailsDeviceModel} from '../../models';
import {DataDeviceService} from '../../services';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public dataDetails: DetailsDeviceModel;
  public updateForm: FormGroup;
  public error: string;
  public errorCard: string;
  public showSpinner = false;
  public isFetching = true;

  constructor(public service: DataDeviceService,
              public router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.service.getDetailsDevice(this.route.snapshot.paramMap.get('id'))
      .pipe(finalize(() => this.isFetching = false))
      .subscribe((data: DetailsDeviceModel) => {
        const NullOrDAte = data.purchaseDate ? (moment(data.purchaseDate, 'DD-MM-YYYY').format()) : null;
        this.dataDetails = {...data, purchaseDate: NullOrDAte};
        this.initForm(this.dataDetails);
      }, err => this.errorCard = _.get(err, 'error.message', '\n' +
          '        Some error'));
  }


  initForm(defaultDate: DetailsDeviceModel) {
    this.updateForm = this.fb.group({
      id: [defaultDate.id, [Validators.required]],
      name: [defaultDate.name, [Validators.required]],
      serialNumber: [defaultDate.serialNumber, [Validators.required]],
      organizationNumber: [defaultDate.organizationNumber],
      purchaseDate: [defaultDate.purchaseDate],
      inUse: [defaultDate.inUse],
      broken: [defaultDate.broken],
    });
  }

  submit() {
    const bodyRequest = {};
    const NullOrDAte = this.updateForm.value.purchaseDate ? moment(this.updateForm.value.purchaseDate).format('DD-MM-YYYY') : null;
    const updateDetails = {...this.updateForm.value, purchaseDate: NullOrDAte};
    Object.keys(this.dataDetails).forEach(key => {
        if (this.dataDetails[key] !== updateDetails[key]) {
          bodyRequest[key] = updateDetails[key];
        }
      }
    );
    this.showSpinner = true;
    this.service.editDevice(updateDetails.id, bodyRequest)
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(() => {
          this.service.showSuccess('Device successfully updated!');
        },
        err => this.error = _.get(err, 'error.message', '\n' +
            '        Can\'t update device'));
  }
}
