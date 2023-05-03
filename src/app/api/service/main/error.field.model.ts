export class ErrorFieldModel {

  field: string;
  message: string;
  object: string;
  value: string;

  constructor(field: string,
              message: string,
              object: string,
              value: string) {
    this.field = field;
    this.message = message;
    this.object = object;
    this.value = value;
  }
}
