import {Component} from '@angular/core';
import {UserModel} from "../../../../api/model/user.model";
import {RoleModel} from "../../../../api/model/role.model";
import {SessionService} from "../../../../api/main/session.service";
import {UserService} from "../../../../api/service/user.service";
import {GroupService} from "../../../../api/service/group.service";
import {GroupModel} from "../../../../api/model/group.model";

@Component({
  selector: 'app-cabinet-my-group',
  templateUrl: './cabinet-my-group.component.html',
  styleUrls: ['./cabinet-my-group.component.css']
})
export class CabinetMyGroupComponent {

  user!: UserModel;
  role!: RoleModel;
  group!: GroupModel;
  userArray: UserModel[] = [];
  itemName = "my-group";

  constructor(private sessionService: SessionService,
              private userService: UserService,
              private groupService: GroupService) {
    this.sessionService.checkSession();
  }

  ngOnInit(): void {
    this.userService.me().subscribe({
      next: (response1) => {
        this.user = response1;
        var roleArray: RoleModel[] = this.user.roles.sort((r1, r2) => r1.id - r2.id);
        this.role = roleArray[0];

        this.groupService.getGroupByUserId(this.user.id).subscribe({
          next: (response2) => {
            this.group = response2;
            this.userService.findAllByGroupId(response2.id).subscribe({
              next: (response3) => {
                this.userArray = response3;
              },
              error: () => {
                //
              }
            });
          },
          error: () => {
            //
          }
        });

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
