import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from '../components/detail-view/detail-view.component';
import { ContentListComponent } from '../components/content-list/content-list.component';
import { ContentListItemComponent } from '../components/content-list-item/content-list-item.component';

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
    path: "content/:id",
    component: DetailViewComponent
  }
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
