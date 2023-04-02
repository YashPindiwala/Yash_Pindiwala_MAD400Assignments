import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentListItemComponent } from './components/content-list-item/content-list-item.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopNavigationBarComponent } from './components/top-navigation-bar/top-navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FoodItemService } from './Service/food-item.service';
import { ModifyContentComponent } from './components/modify-content/modify-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    DetailViewComponent,
    SearchComponent,
    PageNotFoundComponent,
    TopNavigationBarComponent,
    ModifyContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FoodItemService, {
      delay: 1000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
