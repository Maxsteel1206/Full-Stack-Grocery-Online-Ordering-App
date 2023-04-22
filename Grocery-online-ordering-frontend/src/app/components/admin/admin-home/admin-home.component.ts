import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  userName: string = '';
  constructor(
    private gService: ServiceService
  ) {
    if (this.gService.getAdminName() !== null) {
      this.userName = this.gService.getAdminName();
    }
    this.gService.isAdminLoginPresent();
  }

  ngOnInit(): void {
  }

}
