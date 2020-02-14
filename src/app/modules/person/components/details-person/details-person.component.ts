import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import * as _ from 'lodash';

import {DataPersonService} from '../../services';


@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {
  public person: any;
  public isFetching = true;
  public error: string;

  constructor(public service: DataPersonService,
              public router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getDetailsPerson(this.route.snapshot.paramMap.get('id'))
      .pipe(finalize(() => this.isFetching = false))
      .subscribe(data => {
          this.person = data;
        },
        err => {console.log(err);
          this.error = _.get(err, 'error.message', '\n' +
            '        Some error');
        });

  }

}
