import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  ButtonWithSpinnerComponent,
  SpinnerForButtonComponent,
  DialogWindowComponent

} from './index';
import {MyMaterialModule} from '../../material.module';

@NgModule({
  declarations: [
    SpinnerForButtonComponent,
    ButtonWithSpinnerComponent,
    DialogWindowComponent

  ],
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [
    SpinnerForButtonComponent,
    ButtonWithSpinnerComponent,
    DialogWindowComponent
  ]
})
export class SharedModule {
}

