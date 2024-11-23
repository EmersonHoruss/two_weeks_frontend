export interface ProfileRequired {
  userId: number;
}

export interface ProfileOptional {
  id: number;
  name: string;
  secondName: string;
  surname: string;
  secondSurname: string;
  dni: string;
  phone: string;
  familiarPhone: string;
  whatsapp: string;
  address: string;
  photo: string;
}

export type ProfileProperties = Required<ProfileRequired> &
  Partial<ProfileOptional>;

export type ProfileUpdate = Partial<{
  name: string;
  secondName: string;
  surname: string;
  secondSurname: string;
  dni: string;
  phone: string;
  familiarPhone: string;
  whatsapp: string;
  address: string;
  photo: string;
}>;

export class Profile {
  private readonly id: number;
  private name: string;
  private secondName: string;
  private surname: string;
  private secondSurname: string;
  private dni: string;
  private phone: string;
  private familiarPhone: string;
  private whatsapp: string;
  private address: string;
  private photo: string;
  private userId: number;

  constructor(properties: ProfileProperties) {
    Object.assign(this, properties);
  }

  properties(): ProfileProperties {
    return {
      id: this.id,
      name: this.name,
      secondName: this.secondName,
      surname: this.surname,
      secondSurname: this.secondSurname,
      dni: this.dni,
      phone: this.phone,
      familiarPhone: this.familiarPhone,
      whatsapp: this.whatsapp,
      address: this.address,
      photo: this.photo,
      userId: this.userId,
    };
  }

  update(fields: ProfileUpdate) {
    Object.assign(this, fields);
  }
}
