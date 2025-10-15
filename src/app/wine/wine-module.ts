import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Wines} from './wines/wines';
import {AddWine} from './add-wine/add-wine';
import {MaterialModule} from '../infrastructure/material/material-module';
import {RouterModule} from '@angular/router';
import {WineCards} from './wine-cards/wine-cards';
import {WineCard} from './wine-card/wine-card';
import {MatCardContent} from '@angular/material/card';
import {WineDetails} from './wine-details/wine-details';
import {MatTab, MatTabGroup} from '@angular/material/tabs';


@NgModule({
  declarations: [
    Wines,
    AddWine,
    WineCards,
    WineCard,
    WineDetails
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
    RouterModule,
    MatCardContent,
    MatTabGroup,
    MatTab,
  ]
})
export class WineModule {
}
