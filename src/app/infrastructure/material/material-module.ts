import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {MatCard} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatButton,
    MatToolbar,
    RouterLink,
    MatButton,
    MatCard
  ],
  exports: [
    MatFormField,
    MatInputModule,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    MatToolbar,
    RouterLink,
    MatButton,
    MatCard
  ]
})
export class MaterialModule {
}
