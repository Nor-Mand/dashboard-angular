import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './analytics/home/home.component';
import { CrmDashboardComponent } from './crm/crm-dashboard/crm-dashboard.component';
import { EDashboardComponent } from './ecommerce/e-dashboard/e-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crm', component: CrmDashboardComponent },
  { path: 'ecommerce', component: EDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
