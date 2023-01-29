import { Component, Input } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent {
[x: string]: any;
  @Input() singleItem?: IContent;
  display(value: IContent){
    console.log("ID: " + value.id);
    console.log("Description: " + value.description);
  }
}
