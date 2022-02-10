import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from "../../state/app.state"

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean,
  currentProduct: Product,
  products: Product[]
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
}


// selector
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode =  createSelector(
  getProductFeatureState,
  state => state.showProductCode
)

export const getcurrentProdcut =  createSelector(
  getProductFeatureState,
  state => state.currentProduct
)

export const getproducts =  createSelector(
  getProductFeatureState,
  state => state.products
)



export const productReducer = createReducer<ProductState>(
initialState,
on(createAction('[Product] Toggle Product code'), (state): ProductState => {
  console.log('original state:'+ JSON.stringify(state))
  return {
    ...state,
    showProductCode: !state.showProductCode
  }
})
);