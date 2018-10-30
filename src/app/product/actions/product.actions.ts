import { Product } from '@shared/models/product.model';
import { Action } from '@ngrx/store';

export class ProductActions {
  static GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
  static GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
  static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
  static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';

  static getAllProducts(): Action {
    return { type: ProductActions.GET_ALL_PRODUCTS };
  }

  static getProductDetail(id: string): { type: string; payload: string } {
    return {
      type: ProductActions.GET_PRODUCT_DETAIL,
      payload: id
    };
  }

  static getAllProductsSuccess(products: Product[]): { type: string; payload: Product[] } {
    return {
      type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
      payload: products
    };
  }

  // TODO make static
  getProductDetailSuccess(product: Product) {
    return {
      type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
      payload: product
    };
  }

}
