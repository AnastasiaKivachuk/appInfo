import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {DataDeviceService} from '../../../services/data-device.service';
import {Router} from '@angular/router';
import {DetailsDevice} from '../../../models/detailsDevice';
import {dataActions} from '../../../store/action';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() data: DetailsDevice;
  @Input() index: number;

  @Output() onChanged = new EventEmitter<{ state: boolean, id: number }>();

  hideShowWindow(state: boolean, id: number) {
    console.log(state);
    console.log({state, id});
    this.onChanged.emit({state, id});
  }


  constructor(public service: DataDeviceService,
              public router: Router,
              private store: Store<AppState>,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  edit(id) {
    this.router.navigate([`/details/${id}`]);
  }


}
