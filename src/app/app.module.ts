import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifyModule } from './notify';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotifyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
