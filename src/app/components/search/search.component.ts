import { Component } from '@angular/core';
import { IContent } from 'src/app/models/icontent';
import { FoodRecipeService } from 'src/app/services/food-recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchItem?: IContent
  constructor(private service: FoodRecipeService){

  }
  showItem(id: number){
    this.searchItem = undefined;
    this.service.getSingleContent(id).subscribe((value: IContent) => {
      this.searchItem = value;
    });
  }
}
