import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() index: number;
  @Input() editable: boolean;
  @Output() removed = new EventEmitter<number>();
  correct: number;

  constructor() { }

  ngOnInit() {
    if (!this.question) {
      this.question = new Question();
    }
      this.correct = this.question.correctAnswer.id || -1;
  }

  addAnswer(): void {
    this.question.answers.push({
      id: this.question.answers.length + 1,
      text: ''
    });
  }

  removeAtIndex(index): void {
    this.question.answers.splice(index, 1);
  }

  removeMe() {
    this.removed.emit(this.index);
  }

  setCorrect(id) {
    this.correct = this.correct === id ? -1 : id;
    this.question.correctAnswer = this.correct === -1 ? null : this.question.answers.filter(x => x.id === id)[0];
  }

  normalize(event) {
    event.path[2].style.filter = 'none';
  }

  showDamage(event) {
    event.path[2].style.filter = 'blur(2px) invert(70%)';
  }
}
