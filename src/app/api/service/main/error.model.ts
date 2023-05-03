import {ErrorFieldModel} from "./error.field.model";

export class ErrorModel {

  error: string;
  fields: ErrorFieldModel[] = [];
  message: string;
  status: number;

  constructor(error: string,
              fields: ErrorFieldModel[] = [],
              message: string,
              status: number) {
    this.error = error;
    this.fields = fields;
    this.message = message;
    this.status = status;
  }
}
