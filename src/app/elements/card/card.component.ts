import { Component, OnInit, Input } from '@angular/core';

export enum CategoryType {
  Live = 1,
  Streaming,
  Personal,
  Gaming,
  Sports,
  Utility,
}

export interface CardProvider {
  url : string;
  name : string;
  category : CategoryType;
  color : string;
  logo : string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() provider : CardProvider

  constructor() { }

  ngOnInit() {
  }

}
