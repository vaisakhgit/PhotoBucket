import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; 
  ngOnInit()
  {
    firebase.initializeApp({apiKey: "AIzaSyATOnSJUB1gUPccpLv8sdOzR7Ff5iahsLo",
    authDomain: "photobucket-1527845630132.firebaseapp.com",storageBucket: "photobucket-1527845630132.appspot.com"});

  }
  constructor(private authService:AuthService){}
};

