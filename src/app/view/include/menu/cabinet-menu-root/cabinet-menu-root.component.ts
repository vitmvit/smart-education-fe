import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-root',
  templateUrl: './cabinet-menu-root.component.html',
  styleUrls: ['./cabinet-menu-root.component.css']
})
export class CabinetMenuRootComponent {

  @Input() itemName = "my-profile";

  constructor(private sessionService: SessionService) {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
