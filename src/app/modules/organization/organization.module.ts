import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  DataOrganizationService,
  FormOrganizationComponent,
  ListOrganizationComponent, MainListOrganizationComponent,
  MainOrganizationDetailsComponent, LineOrganizationComponent
} from './index';
import {SharedModule} from '../shared/shared.module';
import {MyMaterialModule} from '../../material.module';
import {fromData} from '../organization/store/reducers';
import {DataEffects} from './store/effects';

@NgModule({
  declarations: [
    FormOrganizationComponent,
    ListOrganizationComponent,
    MainOrganizationDetailsComponent,
    MainListOrganizationComponent,
    LineOrganizationComponent

  ],
  imports: [MyMaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(
      'storeDataOrganization', fromData.reducer
    ),
    EffectsModule.forFeature([DataEffects]), RouterModule
  ],
  providers: [DataOrganizationService],
})
export class OrganizationModule {
}

