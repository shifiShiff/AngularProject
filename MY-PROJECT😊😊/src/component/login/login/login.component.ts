import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private authservice: AuthService) { }

  SignInForm: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]]
  })

  onSubmit() {
    if (this.SignInForm.valid) {
      console.log(this.SignInForm.get('id')?.value);
      
      this.authservice.SignIn(this.SignInForm.get('id')?.value);
    }
  }


}
