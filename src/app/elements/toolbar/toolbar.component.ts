import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../dialogs/settings-dialog/settings-dialog.component';
import { SourceManagerService } from '../../services/source-manager/source-manager.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
      MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule,
      FormsModule, LogoComponent, MatInputModule
    ]
})
export class ToolbarComponent implements OnInit {
  urlBarOpen : boolean = false;
  url: string = '';
  showTip : boolean = false;

  constructor(public dialog: MatDialog,
              public sourceManager: SourceManagerService) { }

  ngOnInit() {
    this.showTip = localStorage.getItem('hide-settings-tip') != 'true';
  }

  navigate() {
    if (this.url.trim() != '') {
      if (!this.url.startsWith('http'))
        window.open(`http://${this.url.trim()}`, '_blank');
      else 
        window.open(this.url.trim(), '_blank');
    }
  }

  hideTip() {
    this.showTip = false;
    localStorage.setItem('hide-settings-tip','true');
  }

  openSettingsDialog() {
    this.hideTip();
    const dialogRef = this.dialog.open(SettingsDialogComponent, { autoFocus: false });
  }

}
