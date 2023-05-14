import {Component} from '@angular/core';
import {UserModel} from "../../../../api/model/user.model";
import {RoleModel} from "../../../../api/model/role.model";
import {SessionService} from "../../../../api/main/session.service";
import {UserService} from "../../../../api/service/user.service";

@Component({
  selector: 'app-cabinet-my-statistics',
  templateUrl: './cabinet-my-statistics.component.html',
  styleUrls: ['./cabinet-my-statistics.component.css']
})
export class CabinetMyStatisticsComponent {

  user!: UserModel;
  role!: RoleModel;
  itemName = "my-statistics";

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
