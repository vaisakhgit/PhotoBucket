import * as firebase from 'firebase';
import {Injectable}from '@angular/core'
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
token:string;
userName:any;
success:boolean;
signupError:boolean;
signinError:boolean;
signupErrorMessage:string;
signinErrorMessage:string;

constructor(private router:Router){
    this.success=false;
    this.signupError=false;
}
    SignInUser(email:string,password:string)
    {    
        var self=this;      
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(function(authData) {
            console.log(authData);
        }).catch(function(error) {
            console.log(error);
        });       
        firebase.auth().signInWithEmailAndPassword(email,password)        
        .then(
            response=>{
                self.userName=firebase.auth().currentUser.email
                self.signinError=false;
                this.router.navigate(['/gal'])
                firebase.auth().currentUser.getIdToken()
           
            .then(
                (token:string)=>this.token=token
            )
        }
        )       
        .catch(function(Error) {
            self.signinError=true;
            self.signinErrorMessage=Error;
           console.log("Error"+Error);
          });
    }

    GoogleSignInUser()
    {
        
        var self=this;
        var googletoken;
        var provider = new firebase.auth.GoogleAuthProvider();       
        firebase.auth().signInWithPopup(provider).then(function(authData){        
            self.userName= firebase.auth().currentUser.email
            self.router.navigate(['/gal']);
            googletoken=firebase.auth().currentUser.getIdToken()
            self.token=googletoken;
            console.log(authData);
        }).catch(function(error) {
            console.log(error);
        });
        
    }    
    SignUp(email:string,password:string)
    {
        var self = this        
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(function(user) {
                        
            self.userName=firebase.auth().currentUser.email
            self.signupError=false;
            console.log("User created "+self.userName)
            self.success=true;

            
          })
          .catch(function(Error) {
            self.signupError=true;
            self.signupErrorMessage=Error;
           console.log("Error"+Error);
          });

    }
    getToken()
    {
        firebase.auth().currentUser.getIdToken()
        .then(
           (token:string)=>this.token=token
        );
        return this.token;
    }   
    logOut()
    {
        firebase.auth().signOut();
        this.token=null;
        console.log("Logged ot successfully");
    } 
    isAuthenticated()
    {
        return this.token!=null;
    }    
    isAdmin():boolean
    {       
        if(this.userName==="admin@test.com")
        return true;
        else return false;
    }    
}



