import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainDeviceComponent} from './modules/device/container/main-device';
import {MainDeviceDetailsComponent} from './modules/device/container/main-device-details';
import {MainListPersonComponent} from './modules/person/container/main-list-person';
import {FormPersonComponent} from './modules/person/components/form-person';
import {MainListOrganizationComponent, MainOrganizationDetailsComponent} from './modules/organization/container';
import {MainPersonDetailsComponent} from './modules/person/container/main-person-details';



const routes: Routes = [
  { path: '', redirectTo: 'person-list', pathMatch: 'full' },
  { path: 'person-list', component: MainListPersonComponent },
  { path: 'person-list/edit/:id', component: FormPersonComponent },
  { path: 'person-list/create', component: MainOrganizationDetailsComponent },
  { path: 'person-list/details/:id', component: MainPersonDetailsComponent },
  { path: 'device', component: MainDeviceComponent },
  { path: 'device/details/:id', component: MainDeviceDetailsComponent },
  { path: 'organization', component: MainListOrganizationComponent },
  { path: 'organization/details/:id', component: MainOrganizationDetailsComponent },
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
