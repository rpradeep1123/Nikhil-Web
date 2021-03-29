import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from './shared/shared.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { SavedComponent } from './saved/saved.component';
@NgModule({
  declarations: [				
    AppComponent,
      HomeComponent,
      MarketComponent,
      TeamComponent,
      SavedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
