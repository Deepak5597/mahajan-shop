import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from '../_partials/sidebar/sidebar.component';
import { HeaderComponent } from '../_partials/header/header.component';
import { NotAuthorisedComponent } from '../auth/not-authorised/not-authorised.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent, NotAuthorisedComponent, DashboardComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
