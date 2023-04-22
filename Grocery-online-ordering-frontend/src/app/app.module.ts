import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminAddproductComponent } from './components/admin/admin-addproduct/admin-addproduct.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginpageComponent } from './components/admin/admin-loginpage/admin-loginpage.component';
import { GroceriesListComponent } from './components/admin/groceries-list/groceries-list.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerCartComponent } from './components/customer/customer-cart/customer-cart.component';
import { CustomerHeaderComponent } from './components/customer/customer-header/customer-header.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { CustomerLoginpageComponent } from './components/customer/customer-loginpage/customer-loginpage.component';
import { CustomerOrderComponent } from './components/customer/customer-order/customer-order.component';
import { CustomerPaymentComponent } from './components/customer/customer-payment/customer-payment.component';
import { CustomerSignUpComponent } from './components/customer/customer-sign-up/customer-sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PagingComponent } from './components/paging/paging.component';

// 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminAddproductComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminLoginpageComponent,
    GroceriesListComponent,
    AppHeaderComponent,
    ChangePasswordComponent,
    ContactComponent,
    CustomerCartComponent,
    CustomerHeaderComponent,
    CustomerHomeComponent,
    CustomerLoginpageComponent,
    CustomerOrderComponent,
    CustomerPaymentComponent,
    CustomerSignUpComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    NgbModule,
    FontAwesomeModule
  ],

  providers: [
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
