import { IApplication } from '../../../../shared/application/base.interface';
import { Product } from '../../domain/product/product';

export interface IProductApplication extends IApplication<Product> {}
