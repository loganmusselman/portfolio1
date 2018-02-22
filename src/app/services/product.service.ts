import { Injectable } from '@angular/core';
import { Product } from '../../shared/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

	products: Product[];

  constructor(public http: HttpClient) { }

  getProducts(): Observable<Product[]> {
  	return this.http.get<Product[]>(baseURL + 'products');
  }

  filterProducts(filter): Observable<Product[]>{
    if(filter.length > 1){
      for(var i = 0; i < filter.length; i++){
      return this.http.get<Product[]>(baseURL + 'products?type=' + filter[i] + '&type=' + filter[i+1]);
      }
    } else if(filter.length == 1) {
    return this.http.get<Product[]>(baseURL + 'products?type=' + filter);
    } else {
      return this.http.get<Product[]>(baseURL + 'products');
    }
  }

  getSelectedProduct(selectedProduct): Observable<Product[]> {
    return this.http.get<Product[]>(baseURL + 'products?name=' + selectedProduct.name);
  }

  private handleError(err: HttpErrorResponse){
  	let errorMessage = '';

  	if(err.error instanceof Error){
  		errorMessage = `An error occurred: ${err.error.message}`;

  	} else {
  		errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

  	}

  	console.error(errorMessage);
  	return Observable.throw(errorMessage);
  }


}
