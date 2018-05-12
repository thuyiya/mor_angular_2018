import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent
];

const COMPONENTS = [
  
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  entryComponents: [],
  exports: [...COMPONENTS],
  declarations: [
    ...PAGES_COMPONENTS, ...COMPONENTS
  ],
})
export class PagesModule {}
