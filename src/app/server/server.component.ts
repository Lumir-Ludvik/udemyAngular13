import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  public numbereta: number = 5;
  public stringereta: string = "testeros";

  public getServerStatus(name: string): string {
    return `${name} is ok`;
  }
}
