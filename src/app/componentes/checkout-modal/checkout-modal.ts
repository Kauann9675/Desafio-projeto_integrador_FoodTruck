import { Component } from '@angular/core';
import { FoodTruckService } from '../../Service/food-truck.service';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.html',
  styleUrl: './checkout-modal.css'
})
export class CheckoutModal {

  aberto = false;

  customer = '';
  cpf = '';

  payment = 'Cartão';
  consumption = 'Local';


  constructor(
    public foodTruck: FoodTruckService
  ) {}


  openCheckout() {

    if (this.foodTruck.cart.length === 0) {

      alert("Carrinho vazio!");

      return;
    }

    this.aberto = true;

  }


  closeCheckout() {

    this.aberto = false;

  }


  selecionarPagamento(
    pagamento: string
  ) {

    this.payment = pagamento;

  }


  selecionarConsumo(
    consumo: string
  ) {

    this.consumption = consumo;

  }


  formatarCPF() {

    let cpf = this.cpf.replace(/\D/g, '');

    cpf = cpf.substring(0, 11);


    if (cpf.length > 9) {

      cpf = cpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
        '$1.$2.$3-$4'
      );

    } else if (cpf.length > 6) {

      cpf = cpf.replace(
        /(\d{3})(\d{3})(\d{1,3})/,
        '$1.$2.$3'
      );

    } else if (cpf.length > 3) {

      cpf = cpf.replace(
        /(\d{3})(\d{1,3})/,
        '$1.$2'
      );

    }

    this.cpf = cpf;

  }


  getTotal() {

    return this.foodTruck.getTotal();

  }


  confirmCheckout() {

    if (this.customer.trim() === '') {

      alert("Nome é obrigatório.");

      return;
    }


    const total =
      this.foodTruck.getTotal();


    const now = new Date();


    const order = {

      customer: this.customer,

      cpf: this.cpf,

      payment: this.payment,

      consumption: this.consumption,

      products: [
        ...this.foodTruck.cart
      ],

      total: total,

      date:
        now.toLocaleDateString(),

      time:
        now.toLocaleTimeString()

    };


    this.foodTruck.addOrder(order);


    this.foodTruck.cart = [];


    this.customer = '';

    this.cpf = '';


    this.closeCheckout();


    alert("Pedido finalizado!");

  }

}