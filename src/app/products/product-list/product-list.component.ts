import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


import { Product } from '../product';
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle:'Products'
  errorMessage$: Observable<string>;

  displayCode: boolean;
  products$: Observable<Product[]>;

  selectedProduct$: Observable<Product> | null;
  displayCode$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$
    this.selectedProduct$ = this.store.select(getCurrentProduct);

    this.store.dispatch(ProductActions.loadProducts());

    this.products$ = this.store.select(getProducts);

    this.errorMessage$ = this.store.select(getError);

    this.displayCode$ = this.store.select(getShowProductCode);
  }


  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  //  this.displayCode = !this.displayCode;
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
   // this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }));
    // this.productService.changeSelectedProduct(product);
  }

}
