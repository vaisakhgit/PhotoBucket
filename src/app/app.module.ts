import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from '../app/dataService';

import { AppComponent } from './app.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { PicContainerComponent } from './pic-container/pic-container.component';
import { RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import{AuthGuard}from './auth/auth.guard.service';

const routeLists:Routes=[
  { path:"gal",component:PicContainerComponent,canActivate:[AuthGuard]},
  {path:"",component:SigninComponent},
  {path:"comment/:id",component:CommentBoxComponent,canActivate:[AuthGuard]},
  {path:"upload",component:UploadComponent,canActivate:[AuthGuard]},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent}  
]
@NgModule({
  declarations: [
    AppComponent,
    CommentBoxComponent,
    PicContainerComponent,
    UploadComponent,
    SigninComponent,  
    SignupComponent, HeaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers:[AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}


