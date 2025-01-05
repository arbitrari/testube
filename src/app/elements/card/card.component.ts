import { Component, OnInit, Input } from '@angular/core';
import { Source } from 'src/app/services/source-manager/types';
import { MatAnchor } from '@angular/material/button';
import { MatCardContent } from '@angular/material/card';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [MatAnchor, MatCardContent, NgIf]
})
export class CardComponent implements OnInit {
  @Input() source : Source;
  logo: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.setLogo();
    this.setColor();
  }

  setLogo() {
    this.logo = this.source.logos.dark;
  }

  setColor() {
    this.color = this.source.colors.dark;
  }

}
