import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerSignUpComponent } from './components/customer/customer-sign-up/customer-sign-up.component';
import { CustomerLoginpageComponent } from './components/customer/customer-loginpage/customer-loginpage.component';
import { AdminLoginpageComponent } from './components/admin/admin-loginpage/admin-loginpage.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { CustomerCartComponent } from './components/customer/customer-cart/customer-cart.component';
import { CustomerOrderComponent } from './components/customer/customer-order/customer-order.component';
import { CustomerPaymentComponent } from './components/customer/customer-payment/customer-payment.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminAddproductComponent } from './components/admin/admin-addproduct/admin-addproduct.component';
import { GroceriesListComponent } from './components/admin/groceries-list/groceries-list.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path:'customer-register',component: CustomerSignUpComponent},
  {path:'customer-loginpage',component:CustomerLoginpageComponent},
  {path:'admin-login',component:AdminLoginpageComponent},
  {path:'customer',children:[
    {path:'home',component:CustomerHomeComponent},
    {path:'cart',component:CustomerCartComponent},
    {path:'order',component:CustomerOrderComponent},
    {path:'payment/:orderId/:totalPrice',component:CustomerPaymentComponent}
  ]},
  {path:'admin',children:[
    {path:'home',component:AdminHomeComponent},
    {path: 'addproduct', component:AdminAddproductComponent},
    {path:'listproduct',component:GroceriesListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
