import { Injectable } from '@angular/core';
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
              private http: HttpClient) { }


  getAllDevice(){
    return this.http.get( `${this.mainUrl}/device/all`);
  }
}
