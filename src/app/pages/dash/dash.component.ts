import { Component, OnInit } from '@angular/core';
import { SourceManagerService } from 'src/app/services/source-manager/source-manager.service';
import { Category } from 'src/app/services/source-manager/types';
import { NgFor } from '@angular/common';
import { CardComponent } from '../../elements/card/card.component';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss'],
    imports: [NgFor, CardComponent]
})
export class DashComponent implements OnInit {
  categories : Category[];
  loading: boolean = true;

  constructor(
    public sourceManager: SourceManagerService
  ) { 

  }

  ngOnInit() {
    this.sourceManager.load();
    this.categories = this.sourceManager.data();
  }
}
