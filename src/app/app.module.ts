import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './analytics/home/home.component';
import { CrmDashboardComponent } from './crm/crm-dashboard/crm-dashboard.component';
import { EDashboardComponent } from './ecommerce/e-dashboard/e-dashboard.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, CrmDashboardComponent, EDashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
