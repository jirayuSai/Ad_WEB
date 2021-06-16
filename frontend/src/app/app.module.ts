import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BooksComponent } from './components/books/books.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { AddminOrderComponent } from './components/addmin-order/addmin-order.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AddbookComponent,
    BooksComponent,
    OrderComponent,
    AddAddressComponent,
     OrderComponent,
     CartComponent,
     AddminOrderComponent,
     SidebarComponent,
     HeaderComponent,
     ShowproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
