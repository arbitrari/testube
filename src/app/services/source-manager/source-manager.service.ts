import { Injectable, signal } from '@angular/core';
import { Source, Category, DEFAULT_SOURCES } from './types';

@Injectable({
  providedIn: 'root'
})
export class SourceManagerService {
  catArray : Category[] = [];
  data = signal(this.catArray);

  constructor() { }

  load() {
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
  }
  
  hideEmptyCategories() {
    for (let i = this.catArray.length - 1; i >= 0; i--) {
      if (this.catArray[i].sources.length == 0)
        this.catArray.splice(i,1);
    }
  }

}
