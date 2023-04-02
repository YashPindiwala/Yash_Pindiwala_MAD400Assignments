import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CONTENTARRAY } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService implements InMemoryDbService {

  constructor() { }
  createDb(){
    return {
      CONTENTARRAY
    }
  }
}
