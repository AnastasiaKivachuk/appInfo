import {Component, Input, OnInit} from '@angular/core';
import {DataDeviceService} from '../../../services/data-device.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
@Input() data: [];
@Input() index: number;
  constructor(public service: DataDeviceService) {
  }

  ngOnInit() {
  }

  edit() {
    console.log('edit');
  }

  delete() {
    console.log(this.data.id);
    console.log('delete');
    this.service.deleteDevice(this.data.id);
  }

}
