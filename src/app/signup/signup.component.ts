import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }


}
