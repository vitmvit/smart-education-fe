import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cabinet-menu',
  templateUrl: './cabinet-menu.component.html',
  styleUrls: ['./cabinet-menu.component.css']
})
export class CabinetMenuComponent {

  @Input() role = "ROLE_TEACHER";
  @Input() itemName = "my-profile";

  constructor() {
  }
}
