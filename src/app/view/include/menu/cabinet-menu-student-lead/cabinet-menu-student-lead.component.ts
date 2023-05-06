import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-student-lead',
  templateUrl: './cabinet-menu-student-lead.component.html',
  styleUrls: ['./cabinet-menu-student-lead.component.css']
})
export class CabinetMenuStudentLeadComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
