import { Injectable } from '@angular/core';
import { StorageRepository } from '../domain/storage.repository';

@Injectable()
export class StorageInfrastructure implements StorageRepository {
  setStorage(property: string, value: string): void {
    sessionStorage.setItem(property, value);
  }

  getStorage(property: string): string | null {
    return sessionStorage.getItem(property);
  }

  clear(): void {
    sessionStorage.clear();
  }

  getFieldInToken(field: string): string | string[] | null {
    throw new Error('Method not implemented.');
  }
}
