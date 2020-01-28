import {Component, Input, OnInit} from '@angular/core';
import {DataDeviceService} from '../../../services/data-device.service';
import {Router} from '@angular/router';
import {DetailsDevice} from '../../../models/detailsDevice';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
@Input() data: [DetailsDevice];
@Input() index: number;
  constructor(public service: DataDeviceService,
              public router: Router) {
  }

  ngOnInit() {
  }

  edit(id) {
    this.router.navigate([`/details/${id}`]);
  }

  delete(id) {
    this.service.deleteDevice(id);
  }

}
