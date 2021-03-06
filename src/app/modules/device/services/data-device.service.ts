import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {ToastrService} from 'ngx-toastr';

import {AppState} from '../store';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataDeviceService {
  private mainUrl = environment.mainUrl;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private store: Store<AppState>,
              private toastr: ToastrService) {
  }


  getAllDevice(currentPage, pageSize) {
    return this.http.get(`${this.mainUrl}/device/all?page=${currentPage + 1}&pageSize=${pageSize}`);
  }

  createDevice(formValue) {
    return this.http.put(`${this.mainUrl}/device/`, formValue);
  }

  deleteDevice(id) {
    return this.http.delete(`${this.mainUrl}/1device/?id=${id}`);
  }

  getDetailsDevice(id) {
    return this.http.get(`${this.mainUrl}/device/${id}`);
  }

  editDevice(id, body) {
    return this.http.patch(`${this.mainUrl}/device?id=${id}`, body);
  }
  showSuccess(message) {
    this.toastr.success(message);
  }
}


