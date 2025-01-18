import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { emit } from 'process';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb:FormBuilder, private authservice:AuthService){}

  SignInForm=this.fb.group({
    email:['',[Validators.required, Validators.email]]
  })

onSubmit(){
if(this.SignInForm.valid)
  this.authservice.SignIn();
  }


}
