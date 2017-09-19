import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Output() newQuestion = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  userAnswer;
  totalScore: number = 0;
  @Input() questionInfo;
  
  checkAnswer(givenAnswer) {
    console.log(this.userAnswer);
    console.log(this.questionInfo.answer);
    if (this.userAnswer == this.questionInfo.answer) {
      console.log("Updating score now")
      this.totalScore += this.questionInfo.value
    } else{
      console.log("You blew it!!")
    }

    this.newQuestion.emit(true);

    this.userAnswer = '';

  }

}
