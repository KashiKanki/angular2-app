import { Component, OnInit, Input } from '@angular/core';
import { ProductListingComponent } from '../product-listing/product-listing.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() reviews: number;
}
