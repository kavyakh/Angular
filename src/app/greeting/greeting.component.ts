import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
message:string= "Good Afternoon "
textColor="text-color";
textBkColor="text-bkcolor";
iscolorchanged= false;


greetingStyle = [
   this.textColor,
   this.textBkColor
]

constructor() { 

}

  ngOnInit() {
  }
  sayGreet(event){
    console.log(event);
    this.message="Good Morning"+event.type+" "+event.target.value;
  }

  toggleColor(){
    this.iscolorchanged = !this.iscolorchanged;
     }

  getFgcolor(){
    if(this.iscolorchanged){
      return 'black';
    }else{
      return 'pink';
    }
    
  }
  getBgcolor(){
    if(this.iscolorchanged){
      return 'pink';
    }else{
      return 'blue';
    }
  }
}
