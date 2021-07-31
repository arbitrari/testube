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

  closeNewCurl() {
    localStorage.setItem('curlNewSeen','true');
  }

  curlNotSeen() : boolean {
    return localStorage.getItem('curlNewSeen') == null;
  }

  navigate() {
    window.open(this.url);
  }

}
