import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { SourceManagerService } from 'src/app/services/source-manager/source-manager.service';
import { DEFAULT_SOURCES } from 'src/app/services/source-manager/types';
@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss'
})
export class SettingsDialogComponent {
  DEFAULT_SOURCES = DEFAULT_SOURCES;

  @ViewChild('sourceList') sourceList : MatSelectionList;

  constructor(public sourceManager: SourceManagerService) {
    
  }

  onSave() {
   console.log(this.sourceList);
    for (let option of this.sourceList.options) {
      if (option.selected) {
        // remove previously hidden source if re-enabled
        if (this.sourceManager.hiddenSources.has(option.value))
          this.sourceManager.hiddenSources.delete(option.value);
      } else {
        // add unselected sources to list of hidden
        this.sourceManager.hiddenSources.set(option.value,'');
      }
    }
    this.sourceManager.load();
  }
}
