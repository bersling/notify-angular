import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifyModule } from './notify';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NotifyModule.forRoot(),
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
