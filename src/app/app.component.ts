import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-presentation';
  newValue = false;
  public newHandler() {
    console.log('some changes');
  }
}

