export class UserModel {

  public login: string;
  public name: string;
  public lastName: string;
  public middleName: string;
  public phoneNumber: string;
  public studentNumber: number;
  public dateCreation: string;
  public lastModified: string;
  public version: number;

  constructor(login: string,
              name: string,
              lastName: string,
              middleName: string,
              phoneNumber: string,
              studentNumber: number,
              dateCreation: string,
              lastModified: string,
              version: number) {
    this.login = login;
    this.name = name;
    this.lastName = lastName;
    this.middleName = middleName;
    this.phoneNumber = phoneNumber;
    this.studentNumber = studentNumber;
    this.dateCreation = dateCreation;
    this.lastModified = lastModified;
    this.version = version;
  }
}
