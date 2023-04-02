import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from '../components/detail-view/detail-view.component';
import { ContentListComponent } from '../components/content-list/content-list.component';
import { SearchComponent } from '../components/search/search.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ModifyContentComponent } from '../components/modify-content/modify-content.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "content",
    pathMatch: "full",
  },
  {
    path: "content",
    component: ContentListComponent
  },
  {
    path: "addContent",
    component: ModifyContentComponent
  },
  {
    path: "content/:id",
    component: DetailViewComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
