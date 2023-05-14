import {RoleModel} from "./role.model";

export class UserModel {

  public id: number;
  public login: string;
  public roles: RoleModel[];
  public avatarUuid: string;
  public name: string;
  public lastName: string;
  public middleName: string;
  public phoneNumber: string;
  public studentNumber: number;
  public dateCreation: string;
  public lastModified: string;
  public version: number;

  constructor(id: number,
              login: string,
              roles: RoleModel[],
              avatarUuid: string,
              name: string,
              lastName: string,
              middleName: string,
              phoneNumber: string,
              studentNumber: number,
              dateCreation: string,
              lastModified: string,
              version: number) {
    this.id = id;
    this.login = login;
    this.roles = roles;
    this.avatarUuid = avatarUuid;
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
