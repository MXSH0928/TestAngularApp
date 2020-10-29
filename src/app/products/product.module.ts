import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';

@NgModule({
  declarations: [ProductOneComponent, ProductTwoComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductOneComponent, ProductTwoComponent]
})
export class ProductModule { }
