import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Store } from 'store';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    DashboardModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
