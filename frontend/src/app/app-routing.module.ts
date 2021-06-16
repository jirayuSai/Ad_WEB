import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AddminOrderComponent } from './components/addmin-order/addmin-order.component';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import {SigninComponent } from './components/signin/signin.component';
import{ SignupComponent } from './components/signup/signup.component'


const routes: Routes = [
  {path: 'addbook', component: AddbookComponent},
  {path: 'books', component: BooksComponent},
  {path:'order',component:OrderComponent},
  {path:'addminorder',component:AddminOrderComponent},
  {path:'cart',component:CartComponent},
  {path:'add-address',component:AddAddressComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'showproducts', component: ShowproductsComponent},
  {path: 'signup', component: SignupComponent},
  {path: '',
redirectTo: 'signin',
pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
