import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

import {DataPersonService} from '../../../services';
import {DetailsPersonModel} from '../../../models';

@Component({
  selector: 'app-line-person',
  templateUrl: './line-person.component.html',
  styleUrls: ['./line-person.component.css']
})
export class LinePersonComponent implements OnInit {

  @Input() data: DetailsPersonModel;
  @Input() index: number;

  @Output() changed = new EventEmitter<{ state: boolean, id: number}>();

  hideShowWindow(state: boolean, id: number) {
    this.changed.emit({state, id});
  }

  constructor(public service: DataPersonService,
              public router: Router) {
  }

  ngOnInit() {
  }

  open(id) {
    this.router.navigate([`person-list/details/${id}`]);
  }

  edit(id) {
    console.log(id);
    this.router.navigate([`person-list/edit/${id}`]);
  }
}
