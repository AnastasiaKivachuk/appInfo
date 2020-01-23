import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './material.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './modules/device/components/form/form.component';
import {TableDeviceComponent} from './modules/device/components/table-device/table-device.component';
import {MainDeviceComponent} from './modules/device/container/main-device/main-device.component';
import {DetailsComponent} from './modules/device/components/details/details.component';
import {LineComponent} from './modules/device/components/table-device/line/line.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MainDeviceDetailsComponent} from './modules/device/container/main-device-details/main-device-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableDeviceComponent,
    MainDeviceComponent,
    MainDeviceDetailsComponent,
    DetailsComponent,
    LineComponent
  ],
  imports: [
    MyMaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
