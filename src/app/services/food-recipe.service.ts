import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { CONTENTARRAY } from '../data/mock-content';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipeService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  // return all items
  getContent(): Observable<IContent[]>{
    return this.http.get<IContent[]>("api/items");
  }
  // return single item
  getSingleContent(id: number): Observable<IContent>{
    return this.http.get<IContent>("api/items/" + id)
  }
  // Add to array
  addContent(obj: IContent): Observable<IContent>{
    return this.http.post<IContent>("api/items",obj,this.httpOptions);
  }
  // Update Array
  // updateContent(obj: IContent): Observable<IContent[]>{
  //   for (const iterator in CONTENTARRAY) {
  //     if (CONTENTARRAY[iterator].id === obj.id){
  //       CONTENTARRAY[iterator] = obj
  //     }
  //   }
  //   return of(CONTENTARRAY);
  // }
  // // delete item from array
  // removeItemContent(value: number): Observable<IContent>{
  //   for (const iterator in CONTENTARRAY) {
  //     if (CONTENTARRAY[iterator].id === value){
  //       const index = CONTENTARRAY.indexOf(CONTENTARRAY[iterator]);
  //       const removedItem = CONTENTARRAY.splice(index,1)
  //       return of(removedItem[0])
  //     }
  //   }
  //   return of();
  // }
}
