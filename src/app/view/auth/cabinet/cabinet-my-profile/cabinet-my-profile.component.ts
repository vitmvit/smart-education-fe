import {Component} from '@angular/core';

@Component({
  selector: 'app-cabinet-my-profile',
  templateUrl: './cabinet-my-profile.component.html',
  styleUrls: ['./cabinet-my-profile.component.css']
})
export class CabinetMyProfileComponent {

  // user: User;
  role = "ROLE_TEACHER";
  myProfile = "my-profile";

  constructor() {
  }
}
