import { Component, OnInit, Input } from '@angular/core';
import { Source } from 'src/app/services/source-manager/types';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() source : Source;

  constructor() { }

  ngOnInit() {
  }

}
