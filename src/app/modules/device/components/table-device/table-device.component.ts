import {Component, OnInit} from '@angular/core';
import {DataDeviceService} from '../../services/data-device.service';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrls: ['./table-device.component.css']
})
export class TableDeviceComponent implements OnInit {
  public allDevice: any;

  constructor(
    public service: DataDeviceService
  ) {
  }

  ngOnInit() {
    this.service.getAllDevice().subscribe(item =>
      this.allDevice = item.content);
  }

  // getAllDeviceForTable() {
  //   this.service.getAllDevice().subscribe(item =>
  //     console.log(item));
  // }
}
