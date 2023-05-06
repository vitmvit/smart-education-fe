import {Component} from '@angular/core';

@Component({
  selector: 'app-cabinet-my-group',
  templateUrl: './cabinet-my-group.component.html',
  styleUrls: ['./cabinet-my-group.component.css']
})
export class CabinetMyGroupComponent {

  // user: User;
  role = "ROLE_TEACHER";
  myGroup = "my-group";

  constructor() {
  }
}
