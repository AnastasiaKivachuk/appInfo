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
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {PersonModule} from './modules/person/person.module';
import {DeviceModule} from './modules/device/device.module';
import {SharedModule} from './modules/shared/shared.module';
import {OrganizationModule} from './modules/organization/organization.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    HttpClientModule,
    MyMaterialModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 5}),
    EffectsModule.forRoot([]),
    PersonModule,
    DeviceModule,
    SharedModule,
    OrganizationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//
