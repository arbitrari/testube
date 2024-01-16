import { Injectable, signal } from '@angular/core';
import { Source, Category, DEFAULT_SOURCES, CategoryType } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceManagerService {
  catArray : Category[] = [];
  data = signal(this.catArray);

  constructor() { }

  getLogo(source: Source): string {
    return source.logos.dark;
  }

  getColor(source: Source): string {
    return source.colors.dark;
  }

  load() {
    this.catArray.push({title: 'Streaming', sources: []});
    this.catArray.push({title: 'Live Television', sources: []});
    this.catArray.push({title: 'Sports', sources: []});
    this.catArray.push({title: 'Personal Media', sources: []});
    this.catArray.push({title: 'Gaming', sources: []});
    this.catArray.push({title: 'Utility', sources: []});
    
    if (localStorage.getItem('hidden-sources')) {

    } else {

      for (let [key, value] of DEFAULT_SOURCES) {
        this.catArray[value.category].sources.push(value);
      }
    }
  }

  update(newData: Category[]) {
    this.catArray = newData;
  }

  hideSource(source: Source) {

  }
}
