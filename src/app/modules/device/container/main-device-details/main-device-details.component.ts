import {Component, OnInit} from '@angular/core';
import {DataDeviceService} from '../../services/data-device.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DetailsDevice} from '../../models/detailsDevice';

@Component({
  selector: 'app-main-device-details',
  templateUrl: './main-device-details.component.html',
  styleUrls: ['./main-device-details.component.css']
})
export class MainDeviceDetailsComponent implements OnInit {
  public dataDetails: DetailsDevice;

  constructor(public service: DataDeviceService,
              public router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.service.getDetailsDevice(this.route.snapshot.paramMap.get('id'))
    //   .subscribe((data: DetailsDevice) => {
    //     this.dataDetails = data;
    //   });
  }

}
