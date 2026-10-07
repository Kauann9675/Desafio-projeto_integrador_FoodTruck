import { Component, Input } from '@angular/core';
import { FoodTruckService } from '../../Service/food-truck.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() produto: any;

  constructor(
    private foodTruck: FoodTruckService
  ) {}


  adicionar() {

    const index =
      this.foodTruck.products.indexOf(this.produto);

    this.foodTruck.addToCart(index);

  }

}