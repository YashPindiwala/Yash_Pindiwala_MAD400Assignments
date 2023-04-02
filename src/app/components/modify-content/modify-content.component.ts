import { Component } from '@angular/core';
import { FoodItemService } from 'src/app/Service/food-item.service';
import { IContent } from 'src/app/models/icontent';
import { FoodRecipeService } from 'src/app/services/food-recipe.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  itemToAdd: IContent = {
    type: "",
    imgSrc: "",
    name: "",
    description: '',
    author: ''
  }
  constructor(private service: FoodRecipeService){

  }
  add(){
    console.log(this.itemToAdd);
    this.service.addContent(this.itemToAdd).subscribe(cakeFromServer => {
      this.itemToAdd = cakeFromServer;
    })
    console.log(this.itemToAdd);
  }
}
