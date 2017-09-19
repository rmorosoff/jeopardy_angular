import { Component, OnInit, Input } from '@angular/core';
import { JeopardyService } from '../jeopardy.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(private jeopardyService : JeopardyService) { }

  ngOnInit() {
  }

  @Input() totalScore;
  @Input() questionInfo;
  @Input() userAnswer;

  @Input() getDataFromService;



  checkAnswer(givenAnswer) {
    console.log(this.userAnswer);
    console.log(this.questionInfo.answer);
    if (this.userAnswer == this.questionInfo.answer) {
      console.log("Updating score now")
      this.totalScore += this.questionInfo.value
    } else{
      console.log("You blew it!!")
    }

    this.getDataFromService();

    this.userAnswer = '';

  }

}
