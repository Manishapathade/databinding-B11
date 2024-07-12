import { Component } from '@angular/core';

@Component({
  selector: 'app-root',       // app-root >>means this is main component 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  skills : Array<string> = ["html", "css", "js", "Angular", "ts"];
}
