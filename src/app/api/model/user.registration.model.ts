import {PasswordsModel} from "./passwords.model";

export class UserRegistrationModel {

  public name: string;
  public lastName: string;
  public middleName: string;
  public phoneNumber: string;
  public studentNumber: number;
  public login: string;
  public passwords: PasswordsModel;

  constructor(name: string,
              lastName: string,
              middleName: string,
              phoneNumber: string,
              studentNumber: number,
              login: string,
              passwords: PasswordsModel) {
    this.name = name;
    this.lastName = lastName;
    this.middleName = middleName;
    this.phoneNumber = phoneNumber;
    this.studentNumber = studentNumber;
    this.login = login;
    this.passwords = passwords;
  }
}
