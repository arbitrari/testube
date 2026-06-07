import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Source } from '../../services/source-manager/types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
      MatCardModule, MatButtonModule
    ]
})
export class CardComponent implements OnInit {
  @Input() source!: Source;
  logo!: string;
  color!: string;

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
