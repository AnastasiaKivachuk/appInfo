import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {DataDeviceService} from './services/data-device.service';
import {fromData} from './store/reducers';
import {DataEffects} from './store/effects/device.effect';


import {
  MainDeviceDetailsComponent,
  LineComponent,
  DetailsComponent,
  MainDeviceComponent,
  TableDeviceComponent,
  FormComponent
} from './index';
import {SharedModule} from '../shared/shared.module';
import {MyMaterialModule} from '../../material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FormComponent,
    TableDeviceComponent,
    MainDeviceComponent,
    MainDeviceDetailsComponent,
    DetailsComponent,
    LineComponent,
    LineComponent
  ],
  imports: [
    MyMaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('storeData', fromData.reducer),
    EffectsModule.forFeature([DataEffects]),
    RouterModule

  ],
  providers: [DataDeviceService],
})
export class DeviceModule {
}

//
