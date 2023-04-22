import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {
  url: string = "/customer/home";
  userName: string = '';
  constructor(
    private gService :ServiceService,
    private router:Router
  ) {
    if (this.gService.getClientName() !== null) {
      this.userName = this.gService.getClientName();
    }
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  routerToLink(link: string): void {
    if (link === '/customer/logout') {
      this.gService.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }

}

