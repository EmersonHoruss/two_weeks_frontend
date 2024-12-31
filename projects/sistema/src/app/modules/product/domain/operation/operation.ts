import { Product } from '../product/product';

export enum OperationType {
  Add = 'Crear',
  Subtract = 'Quitar',
}

export interface OperationRequired {
  type: OperationType;
  amount: number;
  date: string;
  product: Product;
}

export interface OperationOptional {
  id: number;
}

export type OperationProperties = Required<OperationRequired> &
  Partial<OperationOptional>;

export type OperationUpdate = Partial<{}>;

export class Operation {
  private readonly id: number;
  private type: OperationType;
  private amount: number;
  private date: string;
  private product: Product;

  constructor(properties: OperationProperties) {
    Object.assign(this, properties);

    this.date = new Date().toUTCString();
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
