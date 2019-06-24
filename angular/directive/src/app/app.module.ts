import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBlueDirective } from './text-blue.directive';
import { TextcolorDirective } from './text-color.directive';
import { PageScrollDirective } from './page-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective,
    TextcolorDirective,
    PageScrollDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
