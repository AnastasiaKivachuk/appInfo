import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataPersonService {
  private mainUrl = environment.mainUrl;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private toastr: ToastrService) {
  }

  getAllPerson(currentPage, pageSize) {
    return this.http.get(`${this.mainUrl}/person/all?page=${currentPage + 1}&pageSize=${pageSize}`);
  }

  createPerson(body) {
    return this.http.put(`${this.mainUrl}/person`, body);
  }


  getOrganization(currentPage, pageSize) {
    return this.http.get(`${this.mainUrl}/organization/all?page=${currentPage}&pageSize=${pageSize}`);
  }

  getDevice(currentPage, pageSize) {
    return this.http.get(`${this.mainUrl}/device/all?page=${currentPage}&pageSize=${pageSize}`);
  }

  deletePerson(id) {
    return this.http.delete(`${this.mainUrl}/1person/?id=${id}`);
  }

  getDetailsPerson(id) {
    return this.http.get(`${this.mainUrl}/person/${id}`);
  }

  showSuccess(message) {
    this.toastr.success(message);
  }

}
