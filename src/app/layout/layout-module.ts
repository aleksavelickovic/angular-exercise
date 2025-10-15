import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Home} from './home/home';
import {NavBar} from './nav-bar/nav-bar';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../infrastructure/material/material-module';


@NgModule({
  declarations: [
    Home,
    NavBar
  ],
  exports: [
    NavBar
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LayoutModule {
}
