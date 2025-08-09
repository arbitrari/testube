import { Component, OnInit, effect } from '@angular/core';
import { SourceManagerService } from '../../services/source-manager/source-manager.service';
import { Category } from '../../services/source-manager/types';
import { CardComponent } from '../../elements/card/card.component';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss'],
    imports: [ CardComponent]
})
export class DashComponent implements OnInit {
  categories : Category[];
  loading: boolean = true;
  horizontalScrolling: boolean = true;

  constructor(
    public sourceManager: SourceManagerService
  ) { 
    // Subscribe to data changes using effect
    effect(() => {
      this.categories = this.sourceManager.data();
      this.loading = false;
    });

    // Subscribe to user settings changes
    effect(() => {
      const settings = this.sourceManager.userSettings();
      this.horizontalScrolling = settings.horizontalScrolling;
    });
  }

  ngOnInit() {
    this.sourceManager.load();
  }
}
