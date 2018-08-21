import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DurationPickerModule } from 'ngx-duration-picker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DurationPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
