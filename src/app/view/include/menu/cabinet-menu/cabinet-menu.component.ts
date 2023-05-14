import {Component, Input} from '@angular/core';
import {RoleModel} from "../../../../api/model/role.model";

@Component({
  selector: 'app-cabinet-menu',
  templateUrl: './cabinet-menu.component.html',
  styleUrls: ['./cabinet-menu.component.css']
})
export class CabinetMenuComponent {

  @Input() role!: RoleModel;
  @Input() itemName = "my-profile";

  constructor() {
  }
}
