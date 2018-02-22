import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from '../../shared/product';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

	@Input()
	product: Product[];
	proErrMess: string;


  constructor(//public dialogRef: MatDialogRef<ProductdetailComponent>,
  		private route: ActivatedRoute,
  		private productservice: ProductService,
  		@Inject('BaseURL') private BaseURL) { }

  onNoClick(): void {
  	this.dialogRef.close();
  }

  ngOnInit() {

  	// this.productservice.getSelectedProduct(product).subscribe(product => this.product = product);

  	
  }
  	

}
