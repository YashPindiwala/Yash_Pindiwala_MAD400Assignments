import { Component } from '@angular/core';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Y_Pindiwala_MyFavouriteFoodItems';
  

  constructor(){
    let item1: IContent = {
      id: 10,
      author: "Asaf Jha",
      description: "It is a dish from hyderabad, made with the use of basmati rice, spices and meat.",
      name: "Chicken biryani",
      type: "Non-Veg"
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
      type: "Veg"
    };
    let item4: IContent = {
      id: 14,
      author: "Alfredo di Leilo",
      description: "A creamy pan sauce made from butter and cheese.",
      name: "Alfredo Pasta",
      type: "Veg"
    };
  }
}
