import { Component } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  items: IContent[] = [];

  constructor(){let item1: IContent = {
    id: 10,
    author: "Asaf Jha",
    description: "It is a dish from hyderabad, made with the use of basmati rice, spices and meat.",
    name: "Chicken biryani",
    type: "Non-Veg",
    imgSrc: "https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg"
  };
  let item2: IContent = {
    id: 11,
    author: "Kundan Lal Gujral",
    description: "A curry made from chicken with spiced tomatoess and butter.",
    name: "Butter Chicken",
    type: "Non-Veg"
  };
  let item3: IContent = {
    id: 12,
    author: "Sui Dynasty",
    description: "A dish of cooked rice that has been stir-fried in a wok.",
    name: "Fried Rice",
    type: "Veg",
    tags: [
      "Rice",
      "Vegetables"
    ]
  };
  let item4: IContent = {
    id: 14,
    author: "Alfredo di Leilo",
    description: "A creamy pan sauce made from butter and cheese.",
    name: "Alfredo Pasta",
    type: "Veg",
    imgSrc: "https://thedefineddish.com/wp-content/uploads/2020/05/2020-04-24-00.51.42.jpg"
  };
    this.items.push(item1);
    this.items.push(item2);
    this.items.push(item3);
    this.items.push(item4);
  }
}
