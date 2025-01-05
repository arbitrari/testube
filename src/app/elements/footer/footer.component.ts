import { Component, OnInit } from '@angular/core';
import { VERSION } from '../../../environments/version';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { NgIf, DatePipe } from '@angular/common';
import { MatAnchor, MatIconAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [MatToolbar, NgIf, MatToolbarRow, MatAnchor, RouterLink, MatIconAnchor, DatePipe]
})
export class FooterComponent implements OnInit {
  today : Date;
  hash : string;
  
  constructor(public device : DeviceDetectorService) { 
    this.today = new Date();
  }

  ngOnInit() {
    this.hash = VERSION.hash;
  }

  getReferrer() {
    return document.referrer;
  }
}
