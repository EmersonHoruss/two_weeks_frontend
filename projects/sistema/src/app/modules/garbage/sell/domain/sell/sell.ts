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
  seller: User;
}

export interface SellOptional {
  id: number;
  totalAmount: number;
  date: string;
  paymentMethod: PaymentMethod;
  status: SellStatus;
  debtCollector: User;
  customer: Customer;
  detailSells: Array<DetailSell>;
  activated: boolean;
}

export type SellProperties = Required<SellRequired> & Partial<SellOptional>;

export type SellUpdate = Partial<{
  date: string;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  status: SellStatus;
  seller: User;
  debtCollector: User;
  customer: Customer;
  detailSells: Array<DetailSell>;
  activated: boolean;
}>;

export class Sell {
  private readonly id: number;
  private totalAmount: number;
  private date: string;
  private paymentMethod: PaymentMethod;
  private status: SellStatus;
  private debtCollector: User;
  private customer: Customer;
  private detailSells: Array<DetailSell>;
  private activated: boolean;
  private seller: User;

  constructor(properties: SellProperties) {
    Object.assign(this, properties);

    this.date = new Date().toUTCString();
    this.paymentMethod = PaymentMethod.Ticket;
    this.status = SellStatus.Creating;
    this.activated = true;
  }

  properties(): SellProperties {
    return {
      id: this.id,
      customer: this.customer,
      detailSells: this.detailSells,
      activated: this.activated,
      date: this.date,
      totalAmount: this.totalAmount,
      paymentMethod: this.paymentMethod,
      status: this.status,
      seller: this.seller,
      debtCollector: this.debtCollector,
    };
  }

  update(fields: SellUpdate) {
    Object.assign(this, fields);

    if (fields.paymentMethod === null || fields.paymentMethod === undefined)
      this.paymentMethod = PaymentMethod.Ticket;
    if (fields.status === null || fields.status === undefined)
      this.status = SellStatus.Creating;
  }

  delete() {
    this.activated = false;
  }
}
