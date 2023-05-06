import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-supervisor',
  templateUrl: './cabinet-menu-supervisor.component.html',
  styleUrls: ['./cabinet-menu-supervisor.component.css']
})
export class CabinetMenuSupervisorComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
