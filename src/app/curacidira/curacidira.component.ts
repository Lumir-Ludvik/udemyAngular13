import {Component} from '@angular/core';

@Component({
  selector: 'app-curacidira',
  templateUrl: './curacidira.component.html',
  styleUrls: ['./curacidira.component.css']
})
export class CuracidiraComponent {
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
