import { Injectable, signal } from '@angular/core';
import { Category, DEFAULT_SOURCES, RegionType, UserSettings, Source } from './types';

@Injectable({
  providedIn: 'root'
})
export class SourceManagerService {
  catArray : Category[] = [];
  hiddenSources : Map<string, string> = new Map([]);
  selectedRegion: RegionType = RegionType.Worldwide;
  horizontalScrolling: boolean = true; // Default to horizontal scrolling enabled
  fullscreenUrl: string = 'https://testube.app'; // Default fullscreen URL
  searchQuery: string = '';
  includeHiddenInSearch: boolean = false;
  data = signal(this.catArray);
  hiddenData = signal(this.hiddenSources);
  userSettings = signal<UserSettings>({ selectedRegion: RegionType.Worldwide, hiddenSources: new Map(), horizontalScrolling: true, fullscreenUrl: 'https://testube.app' });

  constructor() { 
    this.loadFromStorage();
    this.load();
  }

  loadFromStorage() {
    const hiddenFromStorage = localStorage.getItem('hiddenSources');
    const regionFromStorage = localStorage.getItem('selectedRegion') as RegionType;
    const horizontalScrollingFromStorage = localStorage.getItem('horizontalScrolling');
    const fullscreenUrlFromStorage = localStorage.getItem('fullscreenUrl');
    
    console.log('Loading from storage:');
    console.log('Hidden sources:', hiddenFromStorage);
    console.log('Region:', regionFromStorage);
    console.log('Horizontal scrolling:', horizontalScrollingFromStorage);
    console.log('Fullscreen URL:', fullscreenUrlFromStorage);
    
    if (hiddenFromStorage) {
      try {
        const parsedHidden = JSON.parse(hiddenFromStorage);
        this.hiddenSources = new Map(Object.entries(parsedHidden));
        console.log('Parsed hidden sources:', this.hiddenSources);
      } catch (e) {
        console.error('Error parsing hidden sources from localStorage:', e);
        this.hiddenSources = new Map();
        localStorage.removeItem('hiddenSources');
      }
    }
    
    // Default to Global (Worldwide) region, only change if a valid region is stored
    if (regionFromStorage && Object.values(RegionType).includes(regionFromStorage)) {
      this.selectedRegion = regionFromStorage;
    } else {
      // Ensure default is Global (Worldwide) and save it
      this.selectedRegion = RegionType.Worldwide;
      localStorage.setItem('selectedRegion', RegionType.Worldwide);
    }

    // Load horizontal scrolling setting, default to true if not set
    if (horizontalScrollingFromStorage !== null) {
      this.horizontalScrolling = horizontalScrollingFromStorage === 'true';
    } else {
      this.horizontalScrolling = true;
      localStorage.setItem('horizontalScrolling', 'true');
    }

    // Load fullscreen URL setting, default to https://testube.app if not set
    if (fullscreenUrlFromStorage) {
      this.fullscreenUrl = fullscreenUrlFromStorage;
      console.log('Loaded fullscreen URL from storage:', this.fullscreenUrl);
    } else {
      this.fullscreenUrl = 'https://testube.app';
      localStorage.setItem('fullscreenUrl', 'https://testube.app');
      console.log('No fullscreen URL in storage, using default:', this.fullscreenUrl);
    }
  }

  setRegion(region: RegionType) {
    this.selectedRegion = region;
    localStorage.setItem('selectedRegion', region);
    this.load(); // Reload data with new region filter
  }

  getRegion(): RegionType {
    return this.selectedRegion;
  }

  setHorizontalScrolling(enabled: boolean) {
    this.horizontalScrolling = enabled;
    localStorage.setItem('horizontalScrolling', enabled.toString());
    this.userSettings.set({ 
      selectedRegion: this.selectedRegion, 
      hiddenSources: new Map(this.hiddenSources),
      horizontalScrolling: this.horizontalScrolling,
      fullscreenUrl: this.fullscreenUrl
    });
  }

  getHorizontalScrolling(): boolean {
    return this.horizontalScrolling;
  }

  setFullscreenUrl(url: string) {
    console.log('Setting fullscreen URL:', url);
    this.fullscreenUrl = url;
    localStorage.setItem('fullscreenUrl', url);
    console.log('Saved to localStorage:', localStorage.getItem('fullscreenUrl'));
    this.userSettings.set({ 
      selectedRegion: this.selectedRegion, 
      hiddenSources: new Map(this.hiddenSources),
      horizontalScrolling: this.horizontalScrolling,
      fullscreenUrl: this.fullscreenUrl
    });
  }

  getFullscreenUrl(): string {
    return this.fullscreenUrl;
  }

  setSearchFilter(query: string, includeHidden: boolean) {
    this.searchQuery = query.toLowerCase().trim();
    this.includeHiddenInSearch = includeHidden;
    this.load();
  }

  clearSearchFilter() {
    this.searchQuery = '';
    this.includeHiddenInSearch = false;
    this.load();
  }

  private matchesSearch(source: Source): boolean {
    if (!this.searchQuery) return true;
    return source.name.toLowerCase().includes(this.searchQuery);
  }

  load() {
    // Completely reset the array
    this.catArray = [];

    // Initialize categories with empty arrays
    this.catArray.push({title: 'Streaming', sources: []});
    this.catArray.push({title: 'Live Television', sources: []});
    this.catArray.push({title: 'Sports', sources: []});
    this.catArray.push({title: 'Personal Media', sources: []});
    this.catArray.push({title: 'Gaming', sources: []});
    this.catArray.push({title: 'Utility', sources: []});
    
    // Add sources to their respective categories
    for (let [key, value] of DEFAULT_SOURCES) {
      // Determine if source should be included based on search and visibility
      let shouldInclude = false;
      
      if (this.searchQuery) {
        // When searching, include based on search query and hidden checkbox
        if (this.matchesSearch(value)) {
          if (this.includeHiddenInSearch) {
            shouldInclude = true; // Include all matching sources regardless of hidden status
          } else {
            shouldInclude = !this.hiddenSources.has(key); // Include only non-hidden matching sources
          }
        }
      } else {
        // When not searching, show all non-hidden services
        shouldInclude = !this.hiddenSources.has(key);
      }
      
      if (shouldInclude) {
        // Ensure the category index is valid
        if (value.category >= 0 && value.category < this.catArray.length) {
          // Create a fresh copy of the source object and add the unique key
          this.catArray[value.category].sources.push({...value, key: key});
        } else {
          console.warn(`Invalid category ${value.category} for service ${key}`);
        }
      }
    }

    this.hideEmptyCategories();

    // Sort sources alphabetically within each category
    for (let category of this.catArray) {
      category.sources.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Force update signals with completely new references
    this.data.set(this.catArray.map(cat => ({
      ...cat,
      sources: [...cat.sources]
    })));
    this.hiddenData.set(new Map(this.hiddenSources));
    this.userSettings.set({ 
      selectedRegion: this.selectedRegion, 
      hiddenSources: new Map(this.hiddenSources),
      horizontalScrolling: this.horizontalScrolling,
      fullscreenUrl: this.fullscreenUrl
    });

    localStorage.setItem('hiddenSources',JSON.stringify(Object.fromEntries(Array.from(this.hiddenSources))));
  }
  
  hideEmptyCategories() {
    for (let i = this.catArray.length - 1; i >= 0; i--) {
      if (this.catArray[i].sources.length == 0)
        this.catArray.splice(i,1);
    }
  }

}
