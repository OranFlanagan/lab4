import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LsitComponent } from './lsit/lsit.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LsitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  count:number=0;
  blHide:boolean = false;
  myFunction()
{
  this.count++;
}

  onStarDBClick()
  {
    if(this.blHide)
    {
      this.blHide = false;
    }
    else
    {
      this.blHide = true;
    }
  }
}
