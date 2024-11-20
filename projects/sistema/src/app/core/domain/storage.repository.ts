export interface StorageRepository {
  setStorage(property: string, value: string): void;
  getStorage(property: string): string | null;
  clear(): void;
  getFieldInToken(field: string): string | string[] | null;
}
