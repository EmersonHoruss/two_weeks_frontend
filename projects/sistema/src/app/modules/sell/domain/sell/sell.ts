import { User } from '../../../user/domain/user/user';
import { Customer } from '../customer/customer';
import { DetailSell } from '../detail-sell/detail-sell';

export enum SellStatus {
  Creating = 'Creandose',
  Created = 'Creado',
  Issued = 'Emitido',
  Delivered = 'Entregado',
}

export enum PaymentMethod {
  Ticket = 'Ticket',
  Receipt = 'Boleta',
  Invoice = 'Factura',
}

export interface SellRequired {
  date: Date;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  status: SellStatus;
  seller: User;
  debtCollector: User;
}

export interface SellOptional {
  id: number;
  detailSells: Array<DetailSell>;
  activated: boolean;
  customer: Customer;
}

export type SellProperties = Required<SellRequired> & Partial<SellOptional>;

export type SellUpdate = Partial<{}>;

export class Sell {
  private readonly id: number;
  private activated: boolean;

  constructor(properties: SellProperties) {
    Object.assign(this, properties);

    this.activated = true;
  }

  properties(): SellProperties {
    return {};
  }

  update(fields: SellUpdate) {
    Object.assign(this, fields);
  }

  delete() {
    this.activated = false;
  }
}
