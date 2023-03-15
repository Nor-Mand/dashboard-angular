import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';

// Menu
import { HomeComponent } from './analytics/home/home.component';
import { CrmDashboardComponent } from './crm/crm-dashboard/crm-dashboard.component';
import { EDashboardComponent } from './ecommerce/e-dashboard/e-dashboard.component';

// chart
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarComponent } from './charts/bar/bar.component';
import { CardsComponent } from './charts/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CrmDashboardComponent,
    EDashboardComponent,
    BarComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
