import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from "../../state/app.state";
import * as ProductActions from "./product.actions";


export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean,
  currentProductId: number | null,
  products: Product[],
  error: string
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
}


//#region  selector
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode =  createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      };

    } else {
      return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
  }
);

export const getProducts =  createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);
//#endregion

//#region reducer
export const productReducer = createReducer<ProductState>(
initialState,
 on(ProductActions.toggleProductCode, (state): ProductState => {
  console.log('original state:'+ JSON.stringify(state))
  return {
    ...state,
    showProductCode: !state.showProductCode
  }
}),

 on(ProductActions.setCurrentProduct,(state, action): ProductState => {
  return {
    ...state,
    currentProductId: action.currentProductId
  }
}),

 on(ProductActions.initializeCurrentProduct, (state): ProductState => {
  return {
    ...state,
    currentProductId: null
  }
}),

 on(ProductActions.initializeCurrentProduct, (state): ProductState => {
  return {
    ...state,
    currentProductId: 0
  }
}),

 on(ProductActions.loadProductsSucess,(state, action): ProductState => {
  return {
    ...state,
    products: action.products,
    error:''
  }
}),

 on(ProductActions.loadProductsFailure, (state, action) => {
  return {
    ...state,
    products:[],
    error:action.error
  }
}),

 on(ProductActions.updateProductSuccess,(state, action) => {
  const updateProducts = state.products.map
  (item => action.product.id === item.id ? action.product : item);
 return {
   ...state,
   products: updateProducts,
   currentProductId: action.product.id,
   error: ''
 }
}),

 on(ProductActions.updateProductFailure,(state, action) => {
  return {
    ...state,
    error: action.error
  }
 }),

 on(ProductActions.createProductSuccess, (state, action) => {
   const newProducts = [...state.products, action.product]
   return {
     ...state,
     products:newProducts,
     currentProductId: action.product.id,
     error:''
   }
 }),

 on(ProductActions.createProductFailure, (state, action) => {

  return {
    ...state,
    error:action.error
  }
})

);
//#endregion
