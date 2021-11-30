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

  onServerAdded($event: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: $event.name,
      content: $event.content
    });
  }

  onBlueprintAdded($event: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: $event.name,
      content: $event.content
    });
  }

}
