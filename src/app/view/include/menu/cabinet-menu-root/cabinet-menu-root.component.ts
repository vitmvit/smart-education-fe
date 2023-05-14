import {Component, Input, OnInit} from '@angular/core';
import {SessionService} from "../../../../api/main/session.service";

@Component({
  selector: 'app-cabinet-menu-root',
  templateUrl: './cabinet-menu-root.component.html',
  styleUrls: ['./cabinet-menu-root.component.css']
})
export class CabinetMenuRootComponent implements OnInit {

  @Input() itemName!: string;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  logOff() {
    this.sessionService.logOff();
  }
}
