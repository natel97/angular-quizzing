import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from './quiz';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question/question';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService, private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  @Input() quiz: Quiz = new Quiz();
  editable: boolean;
  quizzing: boolean;
  id: number;


  ngOnInit() {
    const assignQuiz = (quiz) => {
      this.quizzing = false;
      this.editable = !quiz;
      if (!quiz) {
        this.quiz = new Quiz();
        this.quiz.author = this.userService.getUsers()[0];
      } else {
        this.quiz = quiz;
      }
    };
    if (!this.quiz.id) {
      this.id =  parseInt(this.route.snapshot.paramMap.get('id'), 10);
      this.quizService.getQuizById(this.id).subscribe(assignQuiz);
    }
  }

  addQuestion() {
    this.quiz.questions.push(new Question());
  }

  saveQuiz(): void {
    this.quizService.addQuiz(this.quiz);
    this.editable = false;
  }

  removeAtIndex(index: number): void {
    this.quiz.questions.splice(index, 1);
  }
}
