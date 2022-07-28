import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductComponent, PaymentSuccessComponent, HomescreenComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
