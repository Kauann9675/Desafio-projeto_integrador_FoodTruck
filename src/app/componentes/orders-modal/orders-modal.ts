import { Component } from '@angular/core';
import { FoodTruckService } from '../../Service/food-truck.service';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.html',
  styleUrl: './orders-modal.css'
})
export class OrdersModal {

  aberto = false;

  filtro = 'recent';


  constructor(
    public foodTruck: FoodTruckService
  ) {}


  openOrders() {

    this.aberto = true;

  }


  closeOrders() {

    this.aberto = false;

  }


  get orders() {

    let sorted = [
      ...this.foodTruck.orders
    ];


    if (this.filtro === 'recent') {

      sorted.reverse();

    }


    if (this.filtro === 'az') {

      sorted.sort((a, b) =>
        a.customer.localeCompare(
          b.customer
        )
      );

    }


    if (this.filtro === 'payment') {

      sorted.sort((a, b) =>
        a.payment.localeCompare(
          b.payment
        )
      );

    }


    return sorted;

  }

}