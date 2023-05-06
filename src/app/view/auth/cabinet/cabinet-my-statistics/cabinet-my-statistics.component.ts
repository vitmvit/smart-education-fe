import {Component} from '@angular/core';

@Component({
  selector: 'app-cabinet-my-statistics',
  templateUrl: './cabinet-my-statistics.component.html',
  styleUrls: ['./cabinet-my-statistics.component.css']
})
export class CabinetMyStatisticsComponent {

  // user: User;
  role = "ROLE_TEACHER";
  myStatistics = "my-statistics";

  constructor() {
  }
}
