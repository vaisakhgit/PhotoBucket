import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService:AuthService) { }
  
  ngOnInit() {
  }
  onSignUp(form:NgForm)
  {
      console.log("inside signin code")
      const email=form.value.email;
      console.log(form.value.email)
      const password=form.value.password;
      console.log(form.value.password)
      this.authService.SignUp(email,password);
  }
}
