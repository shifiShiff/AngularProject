import { Component, OnInit } from '@angular/core';
import { User } from '../../modals/User';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  currentUser?: User|null;

  constructor(private activatedRoute:ActivatedRoute, private authService:AuthService){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('userid');
      if (id) {
        let ID=+id
        this.currentUser = this.authService.getUserByID(ID);

      }
    })
    
  

  }
}
