import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { CONTENTARRAY } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipeService {

  constructor() { }
  // return all items
  getContent(): Observable<IContent[]>{
    return of(CONTENTARRAY);
  }
  // return single item
  getSingleContent(id: number): Observable<IContent>{
    for (const iterator of CONTENTARRAY) {
      if (iterator.id === id){
        return of(iterator);
      }
    }
    return of();
  }
  // Add to array
  addContent(obj: IContent){
    CONTENTARRAY.push(obj);
  }
  // Update Array
  updateContent(obj: IContent): Observable<IContent[]>{
    for (const iterator in CONTENTARRAY) {
      if (CONTENTARRAY[iterator].id === obj.id){
        CONTENTARRAY[iterator] = obj
      }
    }
    return of(CONTENTARRAY);
  }
  // delete item from array
  removeItemContent(value: number): Observable<IContent>{
    for (const iterator in CONTENTARRAY) {
      if (CONTENTARRAY[iterator].id === value){
        const index = CONTENTARRAY.indexOf(CONTENTARRAY[iterator]);
        const removedItem = CONTENTARRAY.splice(index,1)
        return of(removedItem[0])
      }
    }
    return of();
  }
}
