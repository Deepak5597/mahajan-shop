import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'items',
        loadChildren: () => import(`../items/items.module`).then(m=> m.ItemsModule)
      },
      {
        path: 'parties',
        loadChildren: () => import(`../parties/parties.module`).then(m=> m.PartiesModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import(`../transactions/transactions.module`).then(m=> m.TransactionsModule)
      },
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
