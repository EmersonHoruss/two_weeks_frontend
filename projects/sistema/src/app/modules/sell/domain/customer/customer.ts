export interface CustomerRequired {
  identity: string; // dni or passport
  firstName: string;
  surname: string;
}

export interface CustomerOptional {
  id: number;
  secondName: string;
  secondSurname: string;
  fullName: string; // calculated property: `${firstName} ${secondName} ${surname} ${secondSurname}`
}

export type CustomerProperties = Required<CustomerRequired> &
  Partial<CustomerOptional>;

export type CustomerUpdate = Partial<{
  identity: string;
  firstName: string;
  surname: string;
  secondName: string;
  secondSurname: string;
}>;

export class Customer {
  private readonly id: number;
  private secondName: string;
  private secondSurname: string;
  private fullName: string;
  private identity: string;
  private firstName: string;
  private surname: string;

  constructor(properties: CustomerProperties) {
    Object.assign(this, properties);

    this.fullName = `${this.firstName} ${this.secondName} ${this.surname} ${this.secondSurname}`;
  }

  properties(): CustomerProperties {
    return {
      id: this.id,
      secondName: this.secondName,
      secondSurname: this.secondSurname,
      fullName: this.fullName,
      identity: this.identity,
      firstName: this.firstName,
      surname: this.surname,
    };
  }

  update(fields: CustomerUpdate) {
    Object.assign(this, fields);

    this.fullName = `${this.firstName} ${this.secondName} ${this.surname} ${this.secondSurname}`;
  }
}
