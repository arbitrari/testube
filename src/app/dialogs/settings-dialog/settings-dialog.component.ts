import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { SourceManagerService } from '../../services/source-manager/source-manager.service';
import { ThemeService, Theme } from '../../services/theme/theme.service';
import { DEFAULT_SOURCES } from '../../services/source-manager/types';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';

import { MatButton } from '@angular/material/button';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-settings-dialog',
    templateUrl: './settings-dialog.component.html',
    styleUrl: './settings-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatButton, MatSelectionList, MatListOption, MatDialogActions, MatDialogClose, MatRadioGroup, MatRadioButton, FormsModule]
})
export class SettingsDialogComponent {
  DEFAULT_SOURCES = DEFAULT_SOURCES;
  selectedTheme: Theme;

  @ViewChild('sourceList') sourceList!: MatSelectionList;

  constructor(public sourceManager: SourceManagerService, public themeService: ThemeService) {
    this.selectedTheme = this.themeService.preference();
  }

  onThemeChange(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  onSave() {
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
