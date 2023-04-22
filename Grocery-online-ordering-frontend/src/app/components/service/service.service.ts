import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url: string = 'http://localhost:8080';

  category: any = [{
    name: "FRUITS" , value: 0,
  }, {
    name: "CANNED_GOODS", value: 1,
  }, {
    name: "VEGETABLES", value: 2,
  }, {
    name: "FROZEN_FOODS", value:  3,
  }, {
    name: "DAIRYP_RODUCTS", value:  4
  }, {
    name: "BABY_ITEMS", value:  5
  },{
    name: "CONDIMENTS_SPICES", value:  6
  },{
    name: "SAUCES_OILS", value:  7
  },{
    name: "SNAKES_CHIPS", value:  8
  },{
    name: " BREAD_BAKERY", value:  9
  },{
    name: "BEVERAGES", value:  10
  },{
    name: "PASTA_RICE", value:  11
  },{
    name: "CEREAL", value:  12
  },{
    name: "BAKING", value:  13
  },{
    name: "PERSONAL_CARE", value:  14
  },{
    name: " PAPER_WARP", value:  15
  },{
    name: "HOUSEHOLD_SUPPLIRS", value:  16
  },{
    name: "OTHER_ITEMS", value:  17
  }
];

  constructor(
    
    private http: HttpClient,
    private router: Router

  ) { }
  

  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/register", body);
  }
  //client login
  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/login", body);
  }
//once we logged in that time we are storing client id into token 
storeClientAuthorization(token: string): void {
  localStorage.setItem("token", token);
}

getClientAuthorization(): any {
  const token = localStorage.getItem("token");
  return token; 
}

storeClientUserName(name: string): void {
  localStorage.setItem("userName", name);
}

getClientName(): any {
  const name = localStorage.getItem("userName");
  return name;
}

clientLogout(): void {
  localStorage.clear();
  this.router.navigate(['']);
}
//admin login
adminSignIn(body: any): Observable<any> {
  return this.http.post(this.url + "/api/admin/login", body);
}
storeAdminAuthorization(token: string): void {
  localStorage.setItem("admin", token);
}
getAdminAuthorization(): any {
  const token = localStorage.getItem("admin");
  return token; 
}

storeAdminUserName(name: string): void {
  localStorage.setItem("adminName", name);
}

getAdminName(): any {
  const name = localStorage.getItem("adminName");
  return name;
}

adminLogout(): void {
  localStorage.clear();
  this.router.navigate(['/']);
}

addProduct(body: any): Observable<any> {
  return this.http.post(this.url + "/api/products/add", body);
}

getProductlist():Observable<any> {
  return this.http.get(this.url + "/api/products/get");
}

deleteProduct(id :any):Observable<any> {
  //return this.http.delete(this.url + "/api/products/" +id);
  //secondway
  return this.http.delete(`${this.url}/api/products/${id}`);
}

getProductById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/products/products/"+id);
}

editProduct(body: any,id:any): Observable<any> {
  return this.http.put(this.url + "/api/products/"+id, body);
}

addToCart(body: any,pid:any,cid:any):Observable<any>{
  return this.http.post(this.url+"/api/cart/"+cid+"/"+pid,body);
}

getCustomerById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/customers/customer/"+id);
}

cartList():Observable<any>{
  return this.http.get(this.url+"/api/cart/list");
}
placeOrder(cid:any,cartid:any,body:any):Observable<any> {
  return this.http.post(this.url + "/api/orders/"+cid+"/"+cartid, body);
}
deleteCart(id :any):Observable<any> {
  
  return this.http.delete(`${this.url}/api/cart/${id}`);
}

orderList(id:any):Observable<any>{
  return this.http.get(this.url+"/api/orders/"+id);
}

getCategoryList(): any {
  return this.category;
}
addPayment(body:any,orderid:any,cid:any):Observable<any> {
  return this.http.post(this.url + "/api/payments/"+orderid+"/"+cid, body);
}

isClientLoginPresent(): void {
  if (this.getClientAuthorization() === null) {
    this.router.navigate(['/client-login']);
  }
}

isAdminLoginPresent(): void {
  if (this.getAdminAuthorization() === null) {
    this.router.navigate(['/admin-login']);
  }
}

forgotPassword(body: any):Observable<any> {
  return this.http.post(this.url + "/api/customers/forgotpassword", body);
}

updateCustomerInformation(body: any):Observable<any> {
  return this.http.put(this.url + "/api/customers/customer/"+body?.customerId, body);
}

changePassword(cid: any,password:any):Observable<any> {
  return this.http.post(this.url + "/api/customers/"+cid+"/"+password,{});
}

getProductByCategory(cid: any, offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products/" + cid + "/"+ offset + "/" + limit);
}

getAllProducts(offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products/" + offset + "/" + limit);
}

}

