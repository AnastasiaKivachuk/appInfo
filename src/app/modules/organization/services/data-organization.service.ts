import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../device/store';
import {ToastrService} from 'ngx-toastr';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataOrganizationService {
  private mainUrl = environment.mainUrl;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private store: Store<AppState>,
              private toastr: ToastrService) {
  }


  getAllOrganization(currentPage, pageSize) {
    return this.http.get(`${this.mainUrl}/organization/all?page=${currentPage + 1}&pageSize=${pageSize}`);
  }

  createOrganization(formValue) {
    return this.http.put(`${this.mainUrl}/organization/`, formValue);
  }

  deleteOrganization(id) {
    return this.http.delete(`${this.mainUrl}/organization/?id=${id}`);
  }

  getDetailsOrganization(id) {
    return this.http.get(`${this.mainUrl}/organization/${id}`);
  }

  editOrganization(body, id) {
    return this.http.patch(`${this.mainUrl}/organization?id=${id}`, body);
  }
  showSuccess(message) {
    this.toastr.success(message);
  }
}
