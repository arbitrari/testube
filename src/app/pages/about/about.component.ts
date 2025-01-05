import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [MatButton, RouterLink, MatIcon]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
