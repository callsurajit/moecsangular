export class Certificate {
    constructor(
      public certificateID : number, 
      public educatorID : number,
      public applicationID: string,
      public certificateNumber: string,
      public licenseType: string,
      public status: string,
      public issueDate: Date,  
      public expirationDate: Date, 
      public createdDate: Date  
    ){}
  }