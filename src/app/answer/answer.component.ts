import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from './answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer: Answer;
  @Input() editable: boolean;
  @Input() index: number;
  @Output() removed = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeMe() {
    this.removed.emit(this.index);
  }

  normalize(event) {
    event.path[3].style.filter = 'none';
  }

  showDamage(event) {
    event.path[3].style.filter = 'blur(2px) invert(70%)';
  }
}
