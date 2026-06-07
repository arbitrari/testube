import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
