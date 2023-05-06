import {Component} from '@angular/core';

@Component({
  selector: 'app-cabinet-group-attendance',
  templateUrl: './cabinet-group-attendance.component.html',
  styleUrls: ['./cabinet-group-attendance.component.css']
})
export class CabinetGroupAttendanceComponent {

  role = "ROLE_TEACHER";
  groupAttendance = "group-attendance";

  constructor() {
  }
}
