import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../modals/User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService){}

  users:User[]=[];

  ngOnInit(): void {
   this.users=this.authService.getAllUsers()
  }
  SignOut(){
  this.authService.SignOut();

  }

}
