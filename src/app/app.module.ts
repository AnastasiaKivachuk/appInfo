import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import {AppComponent} from './app.component';
import {FormComponent} from './modules/device/components/form/form.component';
import {TableDeviceComponent} from './modules/device/components/table-device/table-device.component';
import {MainDeviceComponent} from './modules/device/container/main-device/main-device.component';
import {DetailsComponent} from './modules/device/components/details/details.component';
import {LineComponent} from './modules/device/components/table-device/line/line.component';
import {MainDeviceDetailsComponent} from './modules/device/container/main-device-details/main-device-details.component';
import {DataDeviceService} from './modules/device/services/data-device.service';
import {fromData} from './modules/device/store/reducers';
import {DataEffects} from './modules/device/store/effects/device.effect';

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
    HttpClientModule,
    MyMaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      storeData: fromData.reducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 5}),
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [DataDeviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
