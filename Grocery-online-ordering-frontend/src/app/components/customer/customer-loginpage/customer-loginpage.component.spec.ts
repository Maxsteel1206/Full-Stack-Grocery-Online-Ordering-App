import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginpageComponent } from './customer-loginpage.component';

describe('CustomerLoginpageComponent', () => {
  let component: CustomerLoginpageComponent;
  let fixture: ComponentFixture<CustomerLoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoginpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
