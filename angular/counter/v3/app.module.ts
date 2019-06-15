import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { DecreaseComponent } from './decrease.component';
import { IncreaseComponent } from './increase.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DecreaseComponent,
    IncreaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
