import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Test } from './test/test';
import {WineModule} from './wine/wine-module';

@NgModule({
  declarations: [
    App,
    Test
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WineModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
