export class PasswordsModel {

  public password: string;
  public passwordConfirm: string;

  constructor(password: string,
              passwordConfirm: string) {
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
}
