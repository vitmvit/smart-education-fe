export class SubjectModel {

  public id: number;
  public name: string;
  public dateCreation: string;
  public lastModified: string;
  public version: number;

  constructor(id: number,
              name: string,
              dateCreation: string,
              lastModified: string,
              version: number) {
    this.id = id;
    this.name = name;
    this.dateCreation = dateCreation;
    this.lastModified = lastModified;
    this.version = version;
  }
}
