import { Product } from '@shared/models/product.model';

export interface ProductState {
  productIds: string[];
  productEntities: { [_id: string]: Product };
  selectedProduct: Product;
}
