import {Component} from '@angular/core';
import {UserModel} from "../../../../api/model/user.model";
import {RoleModel} from "../../../../api/model/role.model";
import {SessionService} from "../../../../api/main/session.service";
import {UserService} from "../../../../api/service/user.service";
import {GroupModel} from "../../../../api/model/group.model";
import {SubjectModel} from "../../../../api/model/subject.model";
import {VisitModel} from "../../../../api/model/visit.model";
import {GroupService} from "../../../../api/service/group.service";
import {SubjectService} from "../../../../api/service/subject.service";

@Component({
  selector: 'app-cabinet-my-notification',
  templateUrl: './cabinet-my-notification.component.html',
  styleUrls: ['./cabinet-my-notification.component.css']
})
export class CabinetMyNotificationComponent {

  user!: UserModel;
  role!: RoleModel;
  itemName = "my-notification";

  // constructor(private sessionService: SessionService,
  //             private userService: UserService) {
  //   this.sessionService.checkSession();
  // }
  //
  // ngOnInit(): void {
  //   this.userService.me().subscribe({
  //     next: (response) => {
  //       this.user = response;
  //       var roleArray: RoleModel[] = this.user.roles.sort((r1, r2) => r1.id - r2.id);
  //       this.role = roleArray[0];
  //     },
  //     error: () => {
  //       this.sessionService.logOff();
  //     }
  //   });
  // }
  //
  // logOff() {
  //   this.sessionService.logOff();
  // }

  userArray: UserModel[] = [];
  group!: GroupModel

  selectedAll: boolean = false;
  subjectArray: SubjectModel[] = [];
  teacherArray: UserModel[] = [];

  calendar!: string;
  subjectId!: number;
  teacherId!: number;
  lessonNumber!: number;
  visitArray: VisitModel[] = [];
  num: number = 0;

  constructor(private sessionService: SessionService,
              private userService: UserService,
              private groupService: GroupService,
              private subjectService: SubjectService) {
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
                const date = new Date();
                const array: VisitModel[] = [];
                for (let i = 0; i < response3.length; i++) {
                  array.push(new VisitModel(
                    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay(),
                    this.group.id,
                    0,
                    0,
                    0,
                    this.userArray[i].id,
                    false,
                    "",
                    "")
                  );
                }
                this.visitArray = array;
              },
              error: () => {
              }
            });
          },
          error: () => {
          }
        });

      },
      error: () => {
        this.sessionService.logOff();
      }
    });

    this.subjectService.findAll().subscribe({
      next: (response4) => {
        this.subjectArray = response4;
      },
      error: () => {
      }
    });

    this.userService.findAllTeachers().subscribe({
      next: (response) => {
        this.teacherArray = response
      },
      error: () => {
      }
    });
  }

  selectDate() {
    for (var i = 0; i < this.visitArray.length; i++) {
      this.visitArray[i].date = this.calendar;
    }
    console.log(this.visitArray);
  }

  selectSubject() {
    for (var i = 0; i < this.visitArray.length; i++) {
      this.visitArray[i].subjectId = this.subjectId;
    }
    console.log(this.visitArray);
  }

  selectTeacher() {
    for (var i = 0; i < this.visitArray.length; i++) {
      this.visitArray[i].teacherId = this.teacherId;
    }
    console.log(this.visitArray);
  }

  selectLesson() {
    for (var i = 0; i < this.visitArray.length; i++) {
      this.visitArray[i].lessonNumber = this.lessonNumber;
    }
    console.log(this.visitArray);
  }

  selectVisit(studentId: number) {
    this.selectedAll = !this.selectedAll;
    for (var a = 0; a < this.visitArray.length; a++) {
      this.visitArray[a].visit = this.selectedAll;
    }
    console.log(this.visitArray);
    for (var b = 0; b < this.visitArray.length; b++) {
      if (this.visitArray[b].studentId == studentId) {
        this.visitArray[b].visit = !this.visitArray[b].visit;
      }
    }
    console.log(this.visitArray);
  }

  selectAll() {
    this.selectedAll = !this.selectedAll;
    for (var i = 0; i < this.visitArray.length; i++) {
      this.visitArray[i].visit = this.selectedAll;
    }
    console.log(this.visitArray);
  }

  checkSelectAll(studentId: number) {
    for (var i = 0; i < this.visitArray.length; i++) {
      if (this.visitArray[i].studentId == studentId) {
        this.visitArray[i].visit = this.selectedAll;
      }
    }
    console.log(this.visitArray);
  }

  submitVisit() {
    for (var i = 0; i < this.visitArray.length; i++) {
      this.visitArray[i].date = this.calendar;
      this.visitArray[i].subjectId = this.subjectId;
      this.visitArray[i].teacherId = this.teacherId;
      this.visitArray[i].lessonNumber = this.lessonNumber;
    }
    console.log(this.visitArray);
  }

  logOff() {
    this.sessionService.logOff();
  }
}
