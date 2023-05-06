import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-teacher',
  templateUrl: './cabinet-menu-teacher.component.html',
  styleUrls: ['./cabinet-menu-teacher.component.css']
})
export class CabinetMenuTeacherComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
