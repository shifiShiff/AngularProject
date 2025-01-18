import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth:boolean=false;
  constructor(private router: Router) {
    
   }
   
   SignIn(){
    this.isAuth=true;
    this.router.navigate(['/dashboard']);
    
   }
   SignOut(){
    this.isAuth=false;
    this.router.navigate(['/login'])
   }
}
