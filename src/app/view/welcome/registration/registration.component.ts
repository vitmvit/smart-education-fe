import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // @ts-ignore
  name: string | '';
  // @ts-ignore
  lastName: string | '';
  // @ts-ignore
  middleName: string | '';
  // @ts-ignore
  login: string | '';
  // @ts-ignore
  phoneNumber: number | '';
  // @ts-ignore
  studentNumber: number | '';
  // @ts-ignore
  password: string | '';
  // @ts-ignore
  passwordConfirm: string | '';

  constructor() {
  }

  ngOnInit(): void {
  }

  registration(): void {
  }
}
