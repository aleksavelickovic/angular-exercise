import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatButton
  ],
  exports: [
    MatFormField,
    MatInputModule,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ]
})
export class MaterialModule {
}
