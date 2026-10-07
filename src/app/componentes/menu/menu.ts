import { Component } from '@angular/core';
import { FoodTruckService } from '../../Service/food-truck.service';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, ProductCard],
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  constructor(
    public foodTruck: FoodTruckService
  ) {}

}