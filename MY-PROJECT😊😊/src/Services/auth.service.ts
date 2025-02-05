import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modals/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    new User(1, "aaa"),
    new User(2, "bbb"),
    new User(3, "ccc"),
  ]

  public isAuth: boolean = false;
  constructor(private router: Router) {

  }
  getUserByID(id: number):User|null {
    return this.users.find(user => user.id === id) ||null

  }


  getAllUsers(): User[] {
    return this.users;
  }
  
  SignIn(id: number) {
    id=Number(id);
    if (this.getUserByID(id)) {     
      localStorage.setItem("userId",id.toString()); 
      this.isAuth = true;
      this.router.navigate(['/dashboard']);
    }
    

  }
  SignOut() {
    this.isAuth = false;
    localStorage.removeItem("userId");
    this.router.navigate(['/login'])
  }
}
