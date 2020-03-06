import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {finalize} from 'rxjs/operators';

import {DataOrganizationService} from '../../services';
import {OrganizationModel} from '../../models';


@Component({
  selector: 'app-main-organization-details',
  templateUrl: './main-organization-details.component.html',
  styleUrls: ['./main-organization-details.component.css']
})
export class MainOrganizationDetailsComponent implements OnInit {
  public organization: OrganizationModel;
  public isFetching = true;
  public errorCard: string;

  constructor(public service: DataOrganizationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getDetailsOrganization(this.route.snapshot.paramMap.get('id'))
      .pipe(finalize(() => this.isFetching = false))
      .subscribe((data: OrganizationModel) =>
          this.organization = data,
        err => this.errorCard = _.get(err, 'error.message', '\n' +
          '        Some error'));
  }
}
