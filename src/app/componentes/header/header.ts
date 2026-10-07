import { Component } from '@angular/core';
import { FoodTruckService } from '../../Service/food-truck.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(
    public foodTruck: FoodTruckService
  ) {}


  get cartCount() {

    return this.foodTruck.getCount();

  }

}