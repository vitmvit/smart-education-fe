import {Component} from '@angular/core';

@Component({
  selector: 'app-cabinet-my-notification',
  templateUrl: './cabinet-my-notification.component.html',
  styleUrls: ['./cabinet-my-notification.component.css']
})
export class CabinetMyNotificationComponent {
  role = "ROLE_TEACHER";
  myNotification = "my-notification";

  constructor() {
  }
}
