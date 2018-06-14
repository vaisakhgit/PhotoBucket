import { Component, OnInit,Input} from '@angular/core';
import {ImageService} from '../dataService';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-pic-container',
  templateUrl: './pic-container.component.html',
  styleUrls: ['./pic-container.component.css']
})
export class PicContainerComponent implements OnInit {

  constructor(private _imageService:ImageService,private authservice:AuthService) { }  
 
  ngOnInit() 
  {
    
  }
  deletePic(id:string)
    {      
      this._imageService.deleteImage(id);
    }  
}
