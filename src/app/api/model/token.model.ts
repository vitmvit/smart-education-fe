export class TokenModel {

  public login: string;
  public token: string;
  public expiration: number;

  constructor(login: string,
              token: string,
              expiration: number) {
    this.login = login;
    this.token = token;
    this.expiration = expiration;
  }
}
