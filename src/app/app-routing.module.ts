import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainDeviceComponent} from './modules/device/container/main-device/main-device.component';
import {MainDeviceDetailsComponent} from './modules/device/container/main-device-details/main-device-details.component';


const routes: Routes = [{ path: '', redirectTo: '/device', pathMatch: 'full' },
  { path: 'device', component: MainDeviceComponent},
  { path: 'device/detales:/id', component: MainDeviceDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
