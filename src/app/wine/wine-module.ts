import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Wines} from './wines/wines';
import {AddWine} from './add-wine/add-wine';
import {MaterialModule} from '../infrastructure/material/material-module';


@NgModule({
  declarations: [
    Wines,
    AddWine
  ],
  exports: [
    Wines,
    AddWine
  ],
  imports: [
    CommonModule,
    // MatFormField,
    // MatLabel,
    // MatInput,
    // ReactiveFormsModule
    MaterialModule,
    // ReactiveFormsModule
  ]
})
export class WineModule {
}
