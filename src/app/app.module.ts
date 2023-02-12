import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentListItemComponent } from './components/content-list-item/content-list-item.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    DetailViewComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
