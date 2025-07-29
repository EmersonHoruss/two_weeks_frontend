export interface ProfileCreateDto {
  name?: string;
  secondName?: string;
  surname?: string;
  secondSurname?: string;
  dni?: string;
  phone?: string;
  familiarPhone?: string;
  whatsapp?: string;
  address?: string;
  photo?: string;
  userId: number;
}

export interface ProfileUpdateDto {
  id: number;
  name?: string;
  secondName?: string;
  surname?: string;
  secondSurname?: string;
  dni?: string;
  phone?: string;
  familiarPhone?: string;
  whatsapp?: string;
  address?: string;
  photo?: string;
}

export interface ProfileShowDto {
  id: number;
  name?: string;
  secondName?: string;
  surname?: string;
  secondSurname?: string;
  dni?: string;
  phone?: string;
  familiarPhone?: string;
  whatsapp?: string;
  address?: string;
  photo?: string;
}
