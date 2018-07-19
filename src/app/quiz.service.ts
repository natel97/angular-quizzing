import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Quiz } from './quiz/quiz';
import { Question } from './question/question';
import { Answer } from './answer/answer';
import { User } from './user/user';

const mockData: Quiz[] = [{
  id: 1,
  text: 'Quiz 1',
  questions: [{
    id: 1,
    text: 'Who is the coolist guy on the block?',
    answers: [{
      id: 1,
      text: 'Some random kid'
    }, {
      id: 2,
      text: 'Naters'
    }, {
      id: 3,
      text: 'Bob'
    }],
    correctAnswer: {
      id: 2,
      text: 'Naters'
    }
  }, {
    id: 1,
    text: 'Who is the coolist guy on the block?',
    answers: [{
      id: 1,
      text: 'Some random kid'
    }, {
      id: 2,
      text: 'Naters'
    }, {
      id: 3,
      text: 'Bob'
    }],
    correctAnswer: {
      id: 2,
      text: 'Naters'
    }
  }
],
  author: {
    id: 1,
    firstName: 'Nate',
    lastName: 'Lubitz',
    username: 'NLZDawg',
    email: 'nlub@gmail.com',
    password: ''
  }
}, {
  id: 2,
  text: 'Quiz 2',
  questions: [{
    id: 1,
    text: 'Who is the coolist guy on the block?',
    answers: [{
      id: 1,
      text: 'Some random kid'
    }, {
      id: 2,
      text: 'Naters'
    }, {
      id: 3,
      text: 'Bob'
    }],
    correctAnswer: {
      id: 2,
      text: 'Naters'
    }
  }
],
  author: {
    id: 1,
    firstName: 'Nate',
    lastName: 'Lubitz',
    username: 'NLZDawg',
    email: 'nlub@gmail.com',
    password: ''
  }
}];


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizById(id: number): Observable<Quiz> {
    return of(mockData.slice().filter(x => x.id === id)[0]);
  }

  getQuizzes(): Observable<Quiz[]> {
    return of(mockData.slice());
  }

  addQuiz(quiz: Quiz) {
    const matching = mockData.filter(x => x.id === quiz.id);
    const editing = matching.length > 0;
    if (editing) {
      matching[0] = quiz;
    } else {
      quiz.id = mockData.length + 100;
      mockData.push(quiz);
    }
  }
}
