import { IQuestionLeaf } from './IQuestionLeaf';

export class DecisionTree {
    constructor(
      public label: string,
      public questionleaves: IQuestionLeaf[]
    ){}
  }