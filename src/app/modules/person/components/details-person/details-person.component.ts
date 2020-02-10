import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {DataPersonService} from '../../services/data-person.service';
import {DetailsPersonModel} from '../../models';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {
  public person: DetailsPersonModel;
  // public person: any;
  constructor(public service: DataPersonService,
              public router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getDetailsPerson(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.person = data;
    })

  }

}
