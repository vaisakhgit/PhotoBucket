import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
onSignIn(f:NgForm)
{

  const email=f.value.email;
  const password=f.value.password; 
  this.authService.SignInUser(email,password);
}
onGoogleSignIn()
{
  this.authService.GoogleSignInUser();

}
}
