
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
   
})
export class ImageService{   
    imageList=[]; 
    imageCount:any;
    personalGallery:string[];  
    comment=[];
    success:boolean;
    uploading:boolean;
  
    images =[{
        ID: "0",
        url:"../assets/images/1.jpg",
        Comments:["Good","very good","Nice bro!!"]
      },{
      ID: "1",
      url:"../assets/images/2.jpg",
      Comments:["Wonderful","Nice bro!!"]
    },
      {
        ID: "2",
        url:"../assets/images/3.jpg",
        Comments:["Good click","very good","Nice bro!!"]
      },{
      ID: "3",
      url:"../assets/images/4.jpg",
      Comments:["Great job","very good","Nice bro!!"]
    },
      {
        ID: "4",
        url:"../assets/images/5.jpg",
        Comments:["Nice shot","very good","Which place?"]
      },{
      ID: "5",
      url:"../assets/images/6.jpg",
      Comments:["Keep it up","very good","Nice bro!!"]
    },
      {
        ID: "6",
        url:"../assets/images/7.jpg",
        Comments:["Wonderful bro","very good","Nice bro!!"]
      },{
      ID: "7",
      url:"../assets/images/8.jpg",
      Comments:["Good one","very good","Nice bro!!"]
    },
      {
        ID: "8",
        url:"../assets/images/9.jpg",
        Comments:["Wow","great"]
      },{
      ID: "9",
      url:"../assets/images/10.jpg",
      Comments:["Wonderful,super"]
    }]    
       constructor()
       {
        console.log("Image service obj created"); 
        this.success=false;        
       }
     logMessage()
         {
          console.log("Object pushed");
          console.log(this.imageList);
        }
       public addGalImages(imagePath:string)
        {          
           console.log(this.imageCount)
           console.log(imagePath)
           this.imageCount=this.images.length;
           this.images.push({ID:this.imageCount,url:imagePath,Comments:this.comment})
           console.log(this.images);
        }
       public addPersonalGal(imagePath:string)
        {
        
          this.imageList.push(imagePath);
          console.log(this.imageList);
          this.success=true;
          this.uploading=false;
        }
        public deleteImage(id:string)
        {
        
          for( var i = this.images.length; i--;)
          {          
            if (this.images[i].ID==id) 
             {
              this.images.splice(i, 1);              
            }
          }
        }
      }