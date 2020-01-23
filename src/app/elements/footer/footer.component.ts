import { Component, OnInit } from '@angular/core';
import { VERSION } from '../../../environments/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  today : Date;
  hash : string;

  constructor() { 
    this.today = new Date();
  }

  ngOnInit() {
    this.hash = VERSION.hash;
  }

}
