import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataDeviceService {
  private mainUrl = environment.mainUrl;

  constructor(public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }


  getAllDevice(currentPage) {
    return this.http.get(`${this.mainUrl}/device/all?page=${currentPage + 1}&pageSize=10`);
  }

  createDevice(formValue) {
    const body = {
      name: formValue.name,
      serialNumber: formValue.serialNumber,
      organizationNumber: formValue.organizationNumber,
      purchaseDate: formValue.purchaseDate,
      inUse: formValue.inUse,
      broken: formValue.broken
    };
    console.log(body);
    return this.http.put(`${this.mainUrl}/device/`, body).subscribe(a =>
      console.log(a)
    );
  }

  deleteDevice(id) {
    console.log(id);
    return this.http.delete(`${this.mainUrl}/device/?id=${id}`).subscribe(a =>
      console.log(a));
  }

  getDetailsDevice(id) {
    return this.http.get(`${this.mainUrl}/device/${id}`);
  }
  // editDevice() {
  //   const body = {
  //     name: formValue.name,
  //     seriaNumber : formValue.seriaNumber,
  //     organizationNumber: formValue.organizationNumber,
  //     purchaseDate : formValue.purchaseDate,
  //     inUse : formValue.inUse,
  //     broken : formValue.broken
  //   }
  //   return this.http.put(`${this.mainUrl}/device/`, body);
  // }

}


