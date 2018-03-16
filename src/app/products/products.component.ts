import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product } from '../../shared/product';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  

  onSelect(product) {

    this.product = product;

    console.log(this.product);
    
    let dialogRef = this.dialog.open(ProductdetailComponent, {
      height: "1000px", width: "1000px",
      data: { product: this.product }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed' + this.product);
    });
    
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
      this.productservice.getProducts().subscribe((products) => {
        this.products = products;
        this.selectedProduct = null;
      }, errmess => this.proErrMess = <any>errmess);
      console.log("filter cleared");
    } else {
      return null;
      console.log("did nothing");
    }
  }

}
