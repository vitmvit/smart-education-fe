import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-student',
  templateUrl: './cabinet-menu-student.component.html',
  styleUrls: ['./cabinet-menu-student.component.css']
})
export class CabinetMenuStudentComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
