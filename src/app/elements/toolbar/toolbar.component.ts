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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.url = 'https://'
  }

  navigate() {
    if (this.url != 'https://')
      window.open(this.url);
  }

  openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent);
  }

}
