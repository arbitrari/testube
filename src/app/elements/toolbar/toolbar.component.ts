import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  urlBarOpen : boolean = false;
  url : string;

  constructor() { }

  ngOnInit() {
    this.url = 'https://'
  }

  navigate() {
    window.open(this.url);
  }

}
