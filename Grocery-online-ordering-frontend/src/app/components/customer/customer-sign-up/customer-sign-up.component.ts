import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.scss']
})
export class CustomerSignUpComponent implements OnInit {


  firstName: string = "";
  lastName: string = "";
  customerEmailId: string = "";
  customerPassword: string = "";
  // dob: string = "";
  phone: string = "";
  district: string = "";
  state: string = "";
  pinCode: string = "";
  gender: string = "male";

  constructor(
    
    private router: Router,
    private datePipe: DatePipe,
    private gservice:ServiceService

  ) { }

  ngOnInit(): void {
  }
  // setDOB(ev: any): void {
  //   const date: any = this.datePipe.transform(ev?.value, 'yyyy-MM-dd');
  //   this.dob = date;
  // }


  signup(): void {
    if (this.firstName === '' || this.firstName.length < 3) {
      alert('FirstName must contain atleast 3 characters');
      return;
    }
    if (this.lastName === '' || this.lastName.length < 3) {
      alert('LastName must contain atleast 3 characters');
      return;
    }

    if (this.phone === '' || this.phone.length < 10 || this.phone.length > 10) {
      alert('Phone must contain atleast 10 characters');
      return;
    }
    if (this.district === '' || this.district.length < 3) {
      alert('District must contain atleast 3 characters');
      return;
    }
    if (this.state === '' || this.state.length < 3) {
      alert('State must contain atleast 3 characters');
      return;
    }
    if (this.pinCode === '' || this.pinCode.length < 6) {
      alert('Pincode must contain atleast 6 characters');
      return;
    }
//alert("sucess")
    const body: any = {
      firstName : this.firstName,
      lastName : this.lastName,
      // dateOfBirth :this.dob,
      phoneNumber : this.phone,
      district : this.district,
      state: this.state,
      pinCode :this.pinCode,
      customerEmailId :this.customerEmailId,
      gender :this.gender,
      customerPassword:this.customerPassword

    }
    console.log("=======>",body);
    this.gservice.signUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customerId){
        alert("Registration sucessful");
        this.router.navigate(["/customer-loginpage"]);
      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong!!pl try again");
    })

  }

}
