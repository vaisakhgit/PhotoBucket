import { Component, OnInit } from '@angular/core';
import {ImageService} from '../dataService';
import * as firebase from 'firebase';
import { Input } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
  
})
export class UploadComponent implements OnInit {
  names:string[];  
  downloadURL:string;
  uploadError:boolean;
  uploadErrorMessage:string;
  success:boolean;
  uploading:boolean;
 
  constructor(private _imageService:ImageService){
    this.names = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
    console.log("upload constructor");  
    this.uploadError=false; 
    this.success=false;
    this.uploading=false;
    _imageService.success=false;
    _imageService.uploading=false;
  }
   

imageUpload($event)
{
  this.readThis($event.target,this._imageService);  
}
readThis(inputValue: any,_imageObj:ImageService): void 
{
    this._imageService.success=false;
    this._imageService.uploading=true;
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    var filename=file.name;
    var storageRef=firebase.storage().ref('upload/'+filename);
    var uploadtask=storageRef.put(file);
    
  uploadtask.on('state_changed',function(snapshot)
  {
  },function(error)
  {
      console.log(error)
      this.uploadError=true;
      this.uploadErrorMessage=Error;
  }
  ,function()
  { 
    var self=this;
    {
      this.downloadURL=uploadtask.snapshot.ref.getDownloadURL()
     .then(function(downloadURL) 
     {      
       
       _imageObj.addPersonalGal(downloadURL);
       _imageObj.addGalImages(downloadURL);       
     }
   );    
  }
  }
)  
} 
  ngOnInit() 
  {
    
  }
}
