import { Injectable } from '@angular/core';
import {Question} from '../../models/Question';

@Injectable()
export class DataService {

  //is using the interface from models folder
  questions:Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name ?',
        answer: 'My name is Brad',
        hide: true
      },
      {
        text: 'What is your favourite color?',
        answer: 'My favorite color is red',
        hide: true
      },
      {
        text: 'What is your best Language ?',
        answer: 'My best Language is Angular',
        hide:true
      }
    ]

   }

  getQuestions(){
    return this.questions;
  }
  

}


