import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../../models/icontent';
import { FoodRecipeService } from '../../services/food-recipe.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  @Input() id?: number;
  itemToAdd: IContent = {
    type: "",
    imgSrc: "",
    name: "",
    description: '',
    author: ''
  }
  constructor(private service: FoodRecipeService, private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = +(params.get('id') ?? 0);
      console.log(id);
    });
  }
  add(){
    console.log(this.itemToAdd);
    this.service.addContent(this.itemToAdd).subscribe(cakeFromServer => {
      this.itemToAdd = cakeFromServer;
    })
    console.log(this.itemToAdd);
  }
}
