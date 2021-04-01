import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productslist } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pdc_product : any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))

    // Find the product that correspond with the id provided in the route.
    this.pdc_product = productslist.find(product => product.id === productIdFromRoute);
  }

  addToCart(product : any){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}