import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

import {DataOrganizationService} from '../../../services';
import {OrganizationModel} from '../../../models';

@Component({
  selector: 'app-line-organization',
  templateUrl: './line-organization.component.html',
  styleUrls: ['./line-organization.component.css']
})
export class LineOrganizationComponent implements OnInit {
  @Input() data: OrganizationModel;
  @Input() index: number;
  @Output() changed = new EventEmitter<{ state: boolean, id: number }>();

  hideShowWindow(state: boolean, id: number) {
    this.changed.emit({state, id});
  }

  constructor(public service: DataOrganizationService,
              public router: Router) {
  }

  ngOnInit() {
  }

  edit(id) {
    this.router.navigate([`organization/details/${id}`]);
  }


}
