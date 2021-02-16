import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { PageNotFoundComponent } from '../auth/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'list',
    component: ItemsListComponent
  },
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
