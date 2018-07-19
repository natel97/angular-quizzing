import { Question } from '../question/question';
import { User } from '../user/user';

export class Quiz {
  id: number;
  text: string;
  questions: Question[];
  author: User;
  constructor() {
    this.questions = [];
  }
}
