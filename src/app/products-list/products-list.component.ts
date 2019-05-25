import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../_services/product-service.service'


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductsListComponent implements OnInit {

  list;

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(result => 
      (this.list = result));
   
   }

  

  
}
