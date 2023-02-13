import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../../models/icontent';
import { FoodRecipeService } from '../../services/food-recipe.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit{
    @Input() itemToShow?: IContent
    constructor(
      private route: ActivatedRoute,
      private service: FoodRecipeService
      ){
      
    }
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        let id = +(params.get('id') ?? 0);
        this.service.getSingleContent(id).subscribe((value: IContent) => {
          this.itemToShow = value;
        });
      });
    }
}
