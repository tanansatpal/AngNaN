import { Product } from '@shared/models/product.model';

export interface ProductState {
  products: Product[];
  selectedProduct: Product;
}
