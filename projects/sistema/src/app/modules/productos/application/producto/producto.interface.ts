import { IApplication } from '../../../../shared/application/base.interface';
import { Producto } from '../../domain/producto/producto';

export interface IProductoApplication extends IApplication<Producto> {}
