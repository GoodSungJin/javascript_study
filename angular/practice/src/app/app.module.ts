import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoNavComponent } from './todo-nav/todo-nav.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoFilterPipe } from './todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
