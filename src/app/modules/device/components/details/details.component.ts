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
  public dataDetails: DetailsDevice;
  public updateDetales: DetailsDevice;
  public updateForm: FormGroup;

  constructor(public service: DataDeviceService,
              public router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.service.getDetailsDevice(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: DetailsDevice) => {
        let NullOrDAte;
        data.purchaseDate ? NullOrDAte = (moment(data.purchaseDate, 'DD-MM-YYYY').format()) : NullOrDAte = null;
        this.dataDetails = {...data, purchaseDate: NullOrDAte};
        this.initForm(this.dataDetails);
      });

  }


  initForm(defaultDate) {
    this.updateForm = this.fb.group({
      id: [defaultDate.id, [Validators.required]],
      name: [defaultDate.name, [Validators.required]],
      serialNumber: [defaultDate.serialNumber, [
        Validators.required
      ]],
      organizationNumber: [defaultDate.organizationNumber],
      purchaseDate: [defaultDate.purchaseDate],
      inUse: [defaultDate.inUse],
      broken: [defaultDate.broken],
    });
  }

  submit() {
    const bodyRequest = {};
    let NullOrDAte;
    this.updateForm.value.purchaseDate ? NullOrDAte = (moment(this.updateForm.value.purchaseDate, 'DD-MM-YYYY').format())
      : NullOrDAte = null;
    this.updateDetales = {...this.updateForm.value, purchaseDate: NullOrDAte};
    Object.keys(this.dataDetails).forEach(key => {
        if (this.dataDetails[key] !== this.updateDetales[key]) {
          bodyRequest[key] = this.updateDetales[key];
        }
      }
    );
    this.service.editDevice(this.updateDetales.id, bodyRequest);
  }

}
