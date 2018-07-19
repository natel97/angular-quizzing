import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [{
    email: 'foo@bar.com',
    firstName: 'Foo',
    lastName: 'Bar',
    id: 0,
    password: '$2a$12$UOpWjHpn/CTMoG0Z9F/Q8eyvOIBZx9/eyPOwPyt6laIp.D545X4Lm',
    username: 'TheBombDigity777!'
  }];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  validatePassword(username: string, password: string): User {
    return this.users.filter(x => x.username === username)[0] || new User(); // for now
  }

}
