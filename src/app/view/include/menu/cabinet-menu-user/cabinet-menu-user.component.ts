import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-user',
  templateUrl: './cabinet-menu-user.component.html',
  styleUrls: ['./cabinet-menu-user.component.css']
})
export class CabinetMenuUserComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
