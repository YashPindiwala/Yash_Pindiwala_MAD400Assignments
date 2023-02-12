import { Component, Input } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent {
    @Input() itemToShow?: IContent
    constructor(){
      
    }
}
