import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {DetailsDeviceModel} from '../../../models/detailsDevice.model';
import {DataDeviceService} from '../../../services/data-device.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() data: DetailsDeviceModel;
  @Input() index: number;

  @Output() onChanged = new EventEmitter<{ state: boolean, id: number }>();

  hideShowWindow(state: boolean, id: number) {
    this.onChanged.emit({state, id});
  }


  constructor(public service: DataDeviceService,
              public router: Router) {
  }

  ngOnInit() {
  }

  edit(id) {
    this.router.navigate([`device/details/${id}`]);
  }


}
