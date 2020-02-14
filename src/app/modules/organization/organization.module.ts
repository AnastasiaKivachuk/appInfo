import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  DataOrganizationService,
  DetailsOrganizationComponent,
  FormOrganizationComponent,
  ListOrganizationComponent, MainListOrganizationComponent,
  MainOrganizationDetailsComponent
} from './index';
import {SharedModule} from '../shared/shared.module';
import {MyMaterialModule} from '../../material.module';

@NgModule({
  declarations: [
    DetailsOrganizationComponent,
    FormOrganizationComponent,
    ListOrganizationComponent,
    MainOrganizationDetailsComponent,
    MainListOrganizationComponent

  ],
  imports: [MyMaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule, RouterModule,
    // StoreModule.forFeature(
    //   'storeDataPerson', fromDataPerson.reducer
    // ),
    // EffectsModule.forFeature([DataEffectsPerson]), RouterModule
  ],
  providers: [DataOrganizationService],
})
export class OrganizationModule {
}

