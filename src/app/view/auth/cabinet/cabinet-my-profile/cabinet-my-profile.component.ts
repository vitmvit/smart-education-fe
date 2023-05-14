import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../api/service/user.service";
import {SessionService} from "../../../../api/main/session.service";
import {UserModel} from "../../../../api/model/user.model";
import {RoleModel} from "../../../../api/model/role.model";

@Component({
  selector: 'app-cabinet-my-profile',
  templateUrl: './cabinet-my-profile.component.html',
  styleUrls: ['./cabinet-my-profile.component.css']
})
export class CabinetMyProfileComponent implements OnInit {

  user!: UserModel;
  role!: RoleModel;
  itemName = "my-profile";

  constructor(private sessionService: SessionService,
              private userService: UserService) {
    this.sessionService.checkSession();
  }

  ngOnInit(): void {
    this.userService.me().subscribe({
      next: (response) => {
        this.user = response;
        var roleArray: RoleModel[] = this.user.roles.sort((r1, r2) => r1.id - r2.id);
        this.role = roleArray[0];
      },
      error: () => {
        this.sessionService.logOff();
      }
    });
  }

  logOff() {
    this.sessionService.logOff();
  }
}
