import {NgModule} from '@angular/core';
import {
  MatListModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatListModule, MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
  exports: [MatListModule, MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatTableModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],

})

export class MyMaterialModule {
}
