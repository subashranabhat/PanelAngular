import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import {DataService} from './services/data.service';
import { QuestionComponent } from './components/question/question.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
