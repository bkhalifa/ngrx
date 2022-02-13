import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{currentProductId: number}>()
);

export const clearCurrentProduct = createAction(
  '[Prodcut] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const loadProducts = createAction(
  '[Products] load Success'
);

export const loadProductsSucess = createAction(
  '[Products] load Sucsess',
   props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] load fail',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product] Update product failure',
  props<{ error: string }>()
);

export const createProduct = createAction(
  '[Product] create Product',
   props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product] Create Product Success',
  props<{ error: string }>()
);

