import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'testeros', content: 'idk just work dammit'},
    { type: 'blueprint', name: 'testeros', content: 'idk just work dammit'}
  ];



}
