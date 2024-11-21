import { Product } from '../product/product';

export enum OperationType {
  Add = 'Add',
  Subtract = 'Subtract',
}

export interface OperationRequired {
  type: OperationType;
  amount: number;
  date: Date;
  product: Product;
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
  private product: Product;

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
      product: this.product,
    };
  }
}
