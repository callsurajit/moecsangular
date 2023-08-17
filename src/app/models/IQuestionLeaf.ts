export class IQuestionLeaf {
    constructor(
      public questionid : number,
      public questiontypename : string, 
      public questionname : string,
      public questionleaves : Map<string, IQuestionLeaf>[]
    ){}
  }