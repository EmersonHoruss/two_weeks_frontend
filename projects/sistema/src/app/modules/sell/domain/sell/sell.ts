import { DetailSell } from '../detail-sell/detail-sell';

export enum SellStatus {
  Creandose = 'Creandose',
  Creado = 'Creado',
}

export enum PaymentMethod {
  Ticket = 'Ticket',
  Boleta = 'Boleta',
  Factura = 'Factura',
}

export interface SellRequired {
  date: Date;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  status: SellStatus;
}

export interface SellOptional {
  id: number;
  detailSells: Array<DetailSell>;
  activated: boolean;
}

export type SellProperties = Required<SellRequired> & Partial<SellOptional>;

export type SellUpdate = Partial<{}>;

export class Sell {
  private readonly id: number;
  private activated: boolean;

  constructor(properties: SellProperties) {
    this.activated = true;
    Object.assign(this, properties);
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
