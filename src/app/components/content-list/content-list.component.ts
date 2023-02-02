import { Component } from '@angular/core';
import { IContent } from '../../models/icontent';
import { FoodRecipeService } from '../../services/food-recipe.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  items: IContent[];

  constructor(private foodRecipe: FoodRecipeService){
    this.items = [];
  }
  ngOnInit(){
    this.foodRecipe.getContent().subscribe((values: IContent[]) => {
      this.items = values;
    });
  }
}
