import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  urlBarOpen : boolean = false;
  url : string;
  showTip : boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.url = '';
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
    const dialogRef = this.dialog.open(SettingsDialogComponent);
  }

}
