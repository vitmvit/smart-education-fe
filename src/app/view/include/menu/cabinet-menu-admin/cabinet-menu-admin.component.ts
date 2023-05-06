import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-admin',
  templateUrl: './cabinet-menu-admin.component.html',
  styleUrls: ['./cabinet-menu-admin.component.css']
})
export class CabinetMenuAdminComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
