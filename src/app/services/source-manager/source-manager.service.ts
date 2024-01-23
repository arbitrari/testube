import { Injectable, signal } from '@angular/core';
import { Category, DEFAULT_SOURCES } from './types';

@Injectable({
  providedIn: 'root'
})
export class SourceManagerService {
  catArray : Category[] = [];
  hiddenSources : Map<String, String> = new Map([]);
  data = signal(this.catArray);
  hiddenData = signal(this.hiddenSources);

  constructor() { 
    this.loadFromStorage();
  }

  loadFromStorage() {
    let hiddenFromStorage = JSON.parse(localStorage.getItem('hiddenSources'));
    console.log(hiddenFromStorage);
    if (hiddenFromStorage) {
      this.hiddenSources = new Map(Object.entries(hiddenFromStorage));
    }
  }

  load() {
    this.catArray = [];

    this.catArray.push({title: 'Streaming', sources: []});
    this.catArray.push({title: 'Live Television', sources: []});
    this.catArray.push({title: 'Sports', sources: []});
    this.catArray.push({title: 'Personal Media', sources: []});
    this.catArray.push({title: 'Gaming', sources: []});
    this.catArray.push({title: 'Utility', sources: []});
    
    for (let [key, value] of DEFAULT_SOURCES) {
      if (!this.hiddenSources.has(key))
        this.catArray[value.category].sources.push(value);
    }

    this.hideEmptyCategories();

    this.data.set(this.catArray);
    this.hiddenData.set(this.hiddenSources);

    localStorage.setItem('hiddenSources',JSON.stringify(Object.fromEntries(Array.from(this.hiddenSources))));
  }
  
  hideEmptyCategories() {
    for (let i = this.catArray.length - 1; i >= 0; i--) {
      if (this.catArray[i].sources.length == 0)
        this.catArray.splice(i,1);
    }
  }

}
