import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { CONTENTARRAY } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipeService {

  constructor() { }
  getContent(): Observable<IContent[]>{
    return of(CONTENTARRAY);
  }
}
