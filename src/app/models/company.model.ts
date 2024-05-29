export class CompanyModel {
  id: string = "";
  name: string = "";
  fullAddress: string = "";
  taxOffice: string = "";
  taxNumber: string = "";
  isDeleted: boolean = false;
  database: DatabaseModel = new DatabaseModel();

  Id: string = "";
  Name: string = "";
  
}

export class DatabaseModel {
  server: string = "";
  databaseName: string = "";
  userId: string = "";
  password: string = "";

}

