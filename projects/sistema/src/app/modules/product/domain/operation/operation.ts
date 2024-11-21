export enum OperationType {
  Add = 'Add',
  Subtract = 'Subtract',
}

export interface OperationRequired {
  type: OperationType;
  amount: number;
  date: Date;
  productId: number;
}

export interface OperationOptional {
  id: number;
  
}

export type OperationProperties = Required<OperationRequired> &
  Partial<OperationOptional>;

export class Operation {
  private readonly id: number;
  private type: OperationType;
  private amount: number;
  private date: Date;
  private productId: number;

  constructor(properties: OperationProperties) {
    this.date = new Date();
    Object.assign(this, properties);
  }

  properties(): OperationProperties {
    return {
      id: this.id,
      type: this.type,
      amount: this.amount,
      date: this.date,
      productId: this.productId,
    };
  }
}
