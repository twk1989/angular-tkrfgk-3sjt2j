import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cc_items = this.cartService.getItems();
  cc_checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void{
    // Process checkout data here
    this.cc_items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.cc_checkoutForm.value);
    this.cc_checkoutForm.reset();
  }

  ngOnInit() {
  }

}