import { Answer } from '../answer/answer';

export class Question {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswer: Answer;

  constructor() {
    this.answers = [];
    this.correctAnswer = new Answer();
    this.id = -1;
    this.text = '';
  }
}
