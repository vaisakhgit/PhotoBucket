import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ImageService} from '../dataService';
import { Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {   
  comments:string[]=["man","cat","iron"];  ;
  inputComment=null
  Adding=false
  picID=this._Activatedroute.snapshot.params['id'];
  picurl=this._imageService.images[this.picID].url;
  picComments=this._imageService.images[this.picID].Comments;  
  picIndexvalue:number;
  AddComments()
  {
    this.comments.push(this.inputComment)
    
    this._imageService.logMessage();
    this._imageService.images[this.picID].Comments.push(this.inputComment);
    this.inputComment=null;    
  }
  DeleteComment(commentIndex:any)
  {    
   console.log(commentIndex);
   this.picIndexvalue=commentIndex;   
      console.log("inside comments index" +this.picIndexvalue )
      if (this.picIndexvalue !== -1) {
        this._imageService.images[this.picID].Comments.splice(this.picIndexvalue, 1);            
  }
  }
  AddMore()
  {
        this.Adding=!this.Adding
  }
  constructor(private _Activatedroute:ActivatedRoute,private _imageService:ImageService,private authService:AuthService) { 
   
  }
  ngOnInit() {
  }
}
