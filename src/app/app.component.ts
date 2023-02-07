import { Component } from '@angular/core';
import { IContent } from './models/icontent';
import { FoodRecipeService } from './services/food-recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Y_Pindiwala_MyFavouriteFoodItems';
  item?: IContent;
  constructor(private foodService: FoodRecipeService){
    
  }
  ngOnInit(){
    this.foodService.getSingleContent(13).subscribe((value) => {
      this.item = value;
    });
  }
}
