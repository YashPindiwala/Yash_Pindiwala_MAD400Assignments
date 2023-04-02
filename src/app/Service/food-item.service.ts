import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { CONTENTARRAY } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let items: IContent[] = CONTENTARRAY;
    return { items };
  }

  // getContent(): IContent[]{
  //   return CONTENTARRAY;
  // }
  // // return single item
  // getSingleContent(id: number): any{
  //   for (const iterator of CONTENTARRAY) {
  //     if (iterator.id === id){
  //       return iterator;
  //     }
  //   }
  //   return null;
  // }
  // // Add to array
  // addContent(obj: IContent): Observable<IContent>{
  //   CONTENTARRAY.push(obj);
  //   return of(obj)
  // }
  // // Update Array
  // updateContent(obj: IContent): IContent[]{
  //   for (const iterator in CONTENTARRAY) {
  //     if (CONTENTARRAY[iterator].id === obj.id){
  //       CONTENTARRAY[iterator] = obj
  //     }
  //   }
  //   return CONTENTARRAY;
  // }
  // // delete item from array
  // removeItemContent(value: number): any{
  //   for (const iterator in CONTENTARRAY) {
  //     if (CONTENTARRAY[iterator].id === value){
  //       const index = CONTENTARRAY.indexOf(CONTENTARRAY[iterator]);
  //       const removedItem = CONTENTARRAY.splice(index,1)
  //       return removedItem[0];
  //     }
  //   }
  //   return null;
  // }
}
