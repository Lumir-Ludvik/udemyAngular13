import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public isDisabled: boolean = false;
  public inputText: string = "";
  public serverCreated: boolean = false;
  ngOnInit(): void {
  }

  public onAddServer($event: Event): void {
    console.log($event);
    this.serverCreated = true;
  }

  public onInputChange(): void {
    this.serverCreated = false;
  }
}

//ng generate component servers
// you can add sub directory via ng generate component servers/test
