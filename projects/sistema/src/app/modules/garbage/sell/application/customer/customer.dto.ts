import { IdentityType } from '../../domain/customer/customer';

export interface CustomerCreateDto {
  identity: string;
  identityType: IdentityType;
  name: string;
}

export interface CustomerUpdateDto {
  id: number;
  identity?: string;
  identityType?: IdentityType;
  name?: string;
}

export interface CustomerShowDto {
  id: number;
  identity: string;
  identityType: IdentityType;
  name: string;
}
