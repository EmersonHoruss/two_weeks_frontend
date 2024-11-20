import { Inject, Injectable } from '@angular/core';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';
import { StorageRepository } from '../domain/storage.repository';

@Injectable()
export class StorageApplication {
  constructor(
    @Inject(StorageInfrastructure) private readonly storage: StorageRepository
  ) {}

  setField(property: string, value: string): void {
    this.storage.setStorage(property, value);
  }

  getField(property: string): string | null {
    return this.storage.getStorage(property);
  }

  getFieldInToken(field: string): string | string[] | null {
    return this.storage.getFieldInToken(field);
  }

  clear(): void {
    this.storage.clear();
  }
}
