import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product } from '../../shared/product';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductdetailComponent } from '../productdetail/productdetail.component';


import 'rxjs/add/operator/do';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Product[];
	proErrMess: string;
	selectedProduct: Product;
  filter = new FormControl();
  //checked: selected;



  
  
  constructor(private productservice: ProductService,
      public dialog: MatDialog,
      @Inject('BaseURL') private BaseURL) { }


  ngOnInit() {
  	this.productservice.getProducts().subscribe((products) => {
      this.products = products;
    }, errmess => this.proErrMess = <any>errmess);
  }

  

  onSelect(product: Product) {

    this.selectedProduct = product;

    /*
    let dialogRef = this.dialog.open(ProductdetailComponent, {
      width: '500px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed' + product);
    });
    */
  }

  onFilter(checked){
    this.productservice.filterProducts(checked).subscribe((products) => {
      this.products = products;
      this.selectedProduct = null;
    }, errmess => this.proErrMess = <any>errmess);
  }

  clearFilter(checked){
    if(checked){
      checked = null;
      this.selectedProduct = null;
    } else {
      return null;
    }
  }

}
