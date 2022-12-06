import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';


@Component({
  selector: 'app-inpaint',
  templateUrl: './inpaint.component.html',
  styleUrls: ['./inpaint.component.css']
})
export class InpaintComponent {
  srcInput:string = ''
  srcOutput:string = ''

  onchange(event:any){
    if(event.target.files){
      var r = new FileReader();
      r.readAsDataURL(event.target.files[0])
      r.onload=(e:any)=>{
        // console.log(e.target.result)
        this.srcInput = e.target.result;
      }
    }
  }

  onInpaintClick(){
    this.changeImage(this.srcInput)

  }
  changeImage(img:any){
    this.srcOutput = img
    document.getElementById('output')?.classList.remove('rotate')
  }
}
