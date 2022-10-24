import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from "../../../../models/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  }
  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
