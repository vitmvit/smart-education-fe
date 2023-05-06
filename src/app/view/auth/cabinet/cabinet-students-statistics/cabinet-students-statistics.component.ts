import {Component} from '@angular/core';

@Component({
  selector: 'app-cabinet-students-statistics',
  templateUrl: './cabinet-students-statistics.component.html',
  styleUrls: ['./cabinet-students-statistics.component.css']
})
export class CabinetStudentsStatisticsComponent {

  role = "ROLE_TEACHER";
  myGroup = "students-statistics";

  constructor() {
  }
}
