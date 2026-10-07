import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodTruckService } from '../../Service/food-truck.service';

@Component({
  selector: 'app-cart-modal',
  imports: [CommonModule],
  templateUrl: './cart-modal.html',
  styleUrl: './cart-modal.css'
})
export class CartModal {

  aberto = false;

  constructor(
    public foodTruck: FoodTruckService
  ) {}

  get itens() {
    return this.foodTruck.cart;
  }

  abrirCarrinho() {
    this.aberto = true;
  }

  fecharCarrinho() {
    this.aberto = false;
  }

  aumentarQuantidade(index: number) {
    this.foodTruck.increase(index);
  }

  diminuirQuantidade(index: number) {
    this.foodTruck.decrease(index);
  }

  removerProduto(index: number) {
    this.foodTruck.cart.splice(index, 1);
  }

  calcularTotal(): number {
    return this.foodTruck.getTotal();
  }

  getQuantidade(): number {
    return this.foodTruck.getCount();
  }
}