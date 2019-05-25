import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../_services/product-service.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private productServiceService : ProductServiceService) { }

  ngOnInit() {
  }

  product = [];

  onSubmit(productForm: NgForm) {
    
    let data = this.productServiceService.form.value;

    this.productServiceService.createProduct(data).then(res => {
     
    });

    alert('product Submitted')

}
}
