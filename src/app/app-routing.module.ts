import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainDeviceComponent} from './modules/device/container/main-device/main-device.component';
import {MainDeviceDetailsComponent} from './modules/device/container/main-device-details/main-device-details.component';
import {MainListPersonComponent} from './modules/person/container/main-list-person/main-list-person.component';
import {FormPersonComponent} from './modules/person/components/form-person/form-person.component';
import {DetailsPersonComponent} from './modules/person/components/details-person/details-person.component';



const routes: Routes = [
  { path: '', redirectTo: 'device', pathMatch: 'full' },
  { path: 'person-list', component: MainListPersonComponent },
  { path: 'person-list/edit:id', component: FormPersonComponent },
  { path: 'person-list/create', component: FormPersonComponent },
  { path: 'person-list/details/:id', component: DetailsPersonComponent },
  { path: 'device', component: MainDeviceComponent },
  { path: 'device/details/:id', component: MainDeviceDetailsComponent },
  // { path: 'device', component: MainDeviceComponent,
  //   children: [
  //     // { path: '', redirectTo: 'device', pathMatch: 'full' },
  //     { path: 'details/:id', component: MainDeviceDetailsComponent },
  //   ]
  // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
