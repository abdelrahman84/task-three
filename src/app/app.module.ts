import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ProductsListComponent } from './products-list/products-list.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddProductsComponent } from './add-products/add-products.component';
import {ProductServiceService} from './_services/product-service.service'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductServiceService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
