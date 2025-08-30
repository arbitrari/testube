import { Injectable, signal } from '@angular/core';
import { Category, DEFAULT_SOURCES, RegionType, UserSettings, Source, POPULARITY_ORDER } from './types';

@Injectable({
  providedIn: 'root'
})
export class SourceManagerService {
  catArray : Category[] = [];
  hiddenSources : Map<string, string> = new Map([]);
  selectedRegion: RegionType = RegionType.Worldwide;
  horizontalScrolling: boolean = true; // Default to horizontal scrolling enabled
  sortByPopularity: boolean = true; // Default to popularity sorting
  fullscreenUrl: string = ''; // Will be set dynamically in constructor
  searchQuery: string = '';
  includeHiddenInSearch: boolean = false;
  data = signal(this.catArray);
  hiddenData = signal(this.hiddenSources);
  userSettings = signal<UserSettings>({ selectedRegion: RegionType.Worldwide, hiddenSources: new Map(), horizontalScrolling: true, fullscreenUrl: '', sortByPopularity: true });

  constructor() { 
    // Set dynamic fullscreen URL based on current site
    this.fullscreenUrl = window.location.origin;
    this.loadFromStorage();
    this.load();
  }

  loadFromStorage() {
    const hiddenFromStorage = localStorage.getItem('hiddenSources');
    const regionFromStorage = localStorage.getItem('selectedRegion') as RegionType;
    const horizontalScrollingFromStorage = localStorage.getItem('horizontalScrolling');
    const fullscreenUrlFromStorage = localStorage.getItem('fullscreenUrl');
    const sortByPopularityFromStorage = localStorage.getItem('sortByPopularity');
    
    console.log('Loading from storage:');
    console.log('Hidden sources:', hiddenFromStorage);
    console.log('Region:', regionFromStorage);
    console.log('Horizontal scrolling:', horizontalScrollingFromStorage);
    console.log('Fullscreen URL:', fullscreenUrlFromStorage);
    console.log('Sort by popularity:', sortByPopularityFromStorage);
    
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

    // Load sort by popularity setting, default to true (popularity) if not set
    if (sortByPopularityFromStorage !== null) {
      this.sortByPopularity = sortByPopularityFromStorage === 'true';
    } else {
      this.sortByPopularity = true;
      localStorage.setItem('sortByPopularity', 'true');
    }

    // Load fullscreen URL setting, default to current site origin if not set
    if (fullscreenUrlFromStorage) {
      this.fullscreenUrl = fullscreenUrlFromStorage;
      console.log('Loaded fullscreen URL from storage:', this.fullscreenUrl);
    } else {
      // If no stored URL, keep the dynamic URL set in constructor
      localStorage.setItem('fullscreenUrl', this.fullscreenUrl);
      console.log('No fullscreen URL in storage, using current site origin:', this.fullscreenUrl);
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
      fullscreenUrl: this.fullscreenUrl,
      sortByPopularity: this.sortByPopularity
    });
  }

  getHorizontalScrolling(): boolean {
    return this.horizontalScrolling;
  }

  setSortByPopularity(enabled: boolean) {
    this.sortByPopularity = enabled;
    localStorage.setItem('sortByPopularity', enabled.toString());
    this.load(); // Reload data with new sorting
  }

  getSortByPopularity(): boolean {
    return this.sortByPopularity;
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
      fullscreenUrl: this.fullscreenUrl,
      sortByPopularity: this.sortByPopularity
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

    // Sort sources within each category
    for (let category of this.catArray) {
      if (this.sortByPopularity) {
        // Sort by popularity order
        category.sources.sort((a, b) => {
          const aIndex = POPULARITY_ORDER.indexOf(a.key || '');
          const bIndex = POPULARITY_ORDER.indexOf(b.key || '');
          
          // If both are in the popularity list, sort by their order
          if (aIndex !== -1 && bIndex !== -1) {
            return aIndex - bIndex;
          }
          // If only one is in the list, prioritize it
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;
          // If neither is in the list, fallback to alphabetical
          return a.name.localeCompare(b.name);
        });
      } else {
        // Sort alphabetically
        category.sources.sort((a, b) => a.name.localeCompare(b.name));
      }
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
      fullscreenUrl: this.fullscreenUrl,
      sortByPopularity: this.sortByPopularity
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
