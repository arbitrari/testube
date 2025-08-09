import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { MatCheckbox } from '@angular/material/checkbox';
import { SourceManagerService } from '../../services/source-manager/source-manager.service';
import { DEFAULT_SOURCES, RegionType, CategoryType } from '../../services/source-manager/types';
import { MatDialogTitle, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption, MatSelectTrigger } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-settings-dialog',
    templateUrl: './settings-dialog.component.html',
    styleUrl: './settings-dialog.component.scss',
    encapsulation: ViewEncapsulation.None, // This allows our styles to affect Material components
    imports: [
        MatDialogTitle, 
        CdkScrollable, 
        MatDialogContent, 
        NgIf, 
        MatButton, 
        MatSelectionList, 
        MatListOption, 
        MatDialogClose,
        MatFormField,
        MatLabel,
        MatInput,
        MatSelect,
        MatOption,
        MatSelectTrigger,
        MatCheckbox,
        MatTabsModule,
        FormsModule
    ]
})
export class SettingsDialogComponent {
  DEFAULT_SOURCES = DEFAULT_SOURCES;
  RegionType = RegionType;
  selectedRegion: RegionType;
  originalRegion: RegionType; // Store original region to restore if cancelled
  localHiddenSources: Map<string, string>; // Track selections locally
  horizontalScrolling: boolean;
  originalHorizontalScrolling: boolean; // Store original value to restore if cancelled
  fullscreenUrl: string;
  originalFullscreenUrl: string; // Store original value to restore if cancelled

  @ViewChild('sourceList') sourceList : MatSelectionList;

  constructor(public sourceManager: SourceManagerService) {
    this.selectedRegion = this.sourceManager.getRegion();
    this.originalRegion = this.selectedRegion; // Store original value
    this.horizontalScrolling = this.sourceManager.getHorizontalScrolling();
    this.originalHorizontalScrolling = this.horizontalScrolling; // Store original value
    this.fullscreenUrl = this.sourceManager.getFullscreenUrl();
    this.originalFullscreenUrl = this.fullscreenUrl; // Store original value
    // Create a local copy of hidden sources to work with
    this.localHiddenSources = new Map(this.sourceManager.hiddenSources);
  }

  onRegionChange(region: RegionType) {
    // Save current selections before changing region
    this.saveCurrentSelections();
    
    this.selectedRegion = region;
    // Don't call sourceManager.setRegion() here - only update local state
    // The region will be applied when user clicks Save
  }

  saveCurrentSelections() {
    if (!this.sourceList) return;
    
    // Update local hidden sources based on current selections
    for (let option of this.sourceList.options) {
      if (option.selected) {
        // Remove from hidden (make visible)
        this.localHiddenSources.delete(option.value);
      } else {
        // Add to hidden (make invisible)
        this.localHiddenSources.set(option.value, '');
      }
    }
  }

  getCategories(): CategoryType[] {
    const categories = new Set<CategoryType>();
    
    for (let [key, source] of DEFAULT_SOURCES) {
      let shouldShow = false;
      
      if (this.selectedRegion === RegionType.Unfiltered) {
        // Show all sources regardless of region
        shouldShow = true;
      } else if (this.selectedRegion === RegionType.Worldwide) {
        // Show only Global sources
        shouldShow = source.region === RegionType.Worldwide;
      } else {
        // Show only sources for the specific selected region (US or UK only)
        shouldShow = source.region === this.selectedRegion;
      }
      
      if (shouldShow) {
        categories.add(source.category);
      }
    }
    
    // Return categories in a logical order
    const orderedCategories = [CategoryType.Streaming, CategoryType.Live, CategoryType.Sports, CategoryType.Gaming, CategoryType.Personal, CategoryType.Utility];
    return orderedCategories.filter(cat => categories.has(cat));
  }

  getCategoryName(category: CategoryType): string {
    switch (category) {
      case CategoryType.Streaming:
        return 'Streaming';
      case CategoryType.Live:
        return 'Live TV';
      case CategoryType.Sports:
        return 'Sports';
      case CategoryType.Gaming:
        return 'Gaming';
      case CategoryType.Personal:
        return 'Personal Media';
      case CategoryType.Utility:
        return 'Utility';
      default:
        return 'Unknown';
    }
  }

  getSourcesByCategory(category: CategoryType): [string, any][] {
    return Array.from(DEFAULT_SOURCES.entries())
      .filter(([key, source]) => {
        if (source.category !== category) return false;
        
        if (this.selectedRegion === RegionType.Unfiltered) {
          // Show all sources regardless of region
          return true;
        } else if (this.selectedRegion === RegionType.Worldwide) {
          // Show only Global sources
          return source.region === RegionType.Worldwide;
        } else {
          // Show only sources for the specific selected region (US or UK only)
          return source.region === this.selectedRegion;
        }
      })
      .sort(([keyA, sourceA], [keyB, sourceB]) => sourceA.name.localeCompare(sourceB.name));
  }

  selectAllForRegion() {
    if (!this.sourceList) return;
    
    // Select all currently visible sources (those matching current region filter)
    this.sourceList.options.forEach(option => {
      option.selected = true;
    });
  }

  selectNoneForRegion() {
    if (!this.sourceList) return;
    
    // Deselect all currently visible sources (those matching current region filter)
    this.sourceList.options.forEach(option => {
      option.selected = false;
    });
  }

  onSave() {
    console.log(this.sourceList);
    
    // Save current selections before applying changes
    this.saveCurrentSelections();
    
    // Apply all the accumulated changes to the source manager
    this.sourceManager.hiddenSources.clear();
    for (let [key, value] of this.localHiddenSources) {
      this.sourceManager.hiddenSources.set(key, value);
    }
    
    // Apply horizontal scrolling setting if it was changed
    if (this.horizontalScrolling !== this.originalHorizontalScrolling) {
      this.sourceManager.setHorizontalScrolling(this.horizontalScrolling);
    }
    
    // Apply fullscreen URL setting if it was changed
    if (this.fullscreenUrl !== this.originalFullscreenUrl) {
      this.sourceManager.setFullscreenUrl(this.fullscreenUrl);
    }
    
    // Apply region change if it was modified
    if (this.selectedRegion !== this.originalRegion) {
      this.sourceManager.setRegion(this.selectedRegion);
    } else {
      // If no region change, still need to reload to reflect source changes
      this.sourceManager.load();
    }
  }

  onCancel() {
    // Restore original region if it was changed
    this.selectedRegion = this.originalRegion;
    // Restore original horizontal scrolling setting
    this.horizontalScrolling = this.originalHorizontalScrolling;
    // Restore original fullscreen URL
    this.fullscreenUrl = this.originalFullscreenUrl;
    // Restore original hidden sources
    this.localHiddenSources = new Map(this.sourceManager.hiddenSources);
  }
}
