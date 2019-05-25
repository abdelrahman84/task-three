import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Product} from '../product.model'
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Products: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firestore :AngularFirestore) { }

  form = new FormGroup({        
    productimage: new FormControl(''),
    producatName: new FormControl(''),
    productPrice: new FormControl(''), 
    
})
  
createProduct(data) {
  return new Promise<any>((resolve, reject) => {
    this.firestore
      .collection("products")
      .add(data)
      .then(res => {}, err => reject(err));
  });
}

getProducts() {
  return this.firestore.collection("products").snapshotChanges();
}

}
