import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

import {DetailsDeviceModel} from '../../../models';
import {DataDeviceService} from '../../../services';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() data: DetailsDeviceModel;
  @Input() index: number;

  @Output() changed = new EventEmitter<{ state: boolean, id: number }>();

  hideShowWindow(state: boolean, id: number) {
    this.changed.emit({state, id});
  }

  constructor(public service: DataDeviceService,
              public router: Router) { }

  ngOnInit() {
  }

  edit(id) {
    this.router.navigate([`device/details/${id}`]);
  }

}
