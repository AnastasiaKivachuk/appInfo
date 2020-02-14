import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  DataPersonService,
  FormPersonComponent,
  DetailsPersonComponent,
  LinePersonComponent,
  ListPersonComponent,
  MainListPersonComponent,
  MainPersonDetailsComponent,
  DataEffectsPerson,
  fromDataPerson
} from './index';
import {SharedModule} from '../shared/shared.module';
import {MyMaterialModule} from '../../material.module';


@NgModule({
  declarations: [
    MainPersonDetailsComponent,
    MainListPersonComponent,
    ListPersonComponent,
    LinePersonComponent,
    DetailsPersonComponent,
    FormPersonComponent,

  ],
  imports: [MyMaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      'storeDataPerson', fromDataPerson.reducer
    ),
    EffectsModule.forFeature([DataEffectsPerson]), RouterModule
  ],
  providers: [DataPersonService],
})
export class PersonModule {
}

