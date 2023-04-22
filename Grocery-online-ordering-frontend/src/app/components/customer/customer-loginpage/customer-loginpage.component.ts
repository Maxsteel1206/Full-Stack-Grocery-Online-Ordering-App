import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-customer-loginpage',
  templateUrl: './customer-loginpage.component.html',
  styleUrls: ['./customer-loginpage.component.scss']
})
export class CustomerLoginpageComponent implements OnInit {

  email: string = "";
  password: string = "";
  // customerLoginForm = new FormGroup({});
  customerLoginForm: any=new FormGroup({});

  constructor(
    private router: Router,
    private gservice:ServiceService,
    private fb: FormBuilder

  ) {
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    this.customerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(pattern)]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });

  }

  ngOnInit(): void {
  }

  
  signIn(): void {

    const body = {
      "customerEmailId": this.customerLoginForm.controls['email'].value,
      "customerPassword": this.customerLoginForm.controls['password'].value
    }
    console.log("=======>",body);
    this.gservice.clientSignIn(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customerId){
       // alert("Login sucessful");
        this.gservice.storeClientAuthorization(res?.customerId);
        let userName = '';
        if (res?.firstName) {
          userName+=res?.firstName;
        }
        if (res?.lastName){
          userName+=' ' + res?.lastName;
        }
        this.gservice.storeClientUserName(userName);
        this.router.navigate(['/customer/home']);
       
      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong in login!!pl try again");
    })

  }

  routeToNewUser(): void {
    this.router.navigate(["/customer-register"]);
  }

  routeToForgotPassword(): void {
    this.router.navigate(["/forgot-password"]);
  }
}
