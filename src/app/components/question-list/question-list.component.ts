import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Question} from '../../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Question[];

  //We need to inject DataService as dependency in our constructor to use anything within our dataservice
  constructor(public dataService:DataService) {
   


   }

  ngOnInit() {

this.questions = this.dataService.getQuestions();
  }

}
