import { Component } from '@angular/core';
import { FoodTruckService } from '../../Service/food-truck.service';

@Component({
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.html',
  styleUrl: './modal-overlay.css'
})
export class ModalOverlay {

  aberto = false;

  produtoSelecionado: any = null;

  ingredientesRemovidos: string[] = [];


  constructor(
    public foodTruck: FoodTruckService
  ) {}


  chooseIngredients(index: number) {

    this.produtoSelecionado =
      this.foodTruck.products[index];

    this.ingredientesRemovidos = [];

    this.aberto = true;

  }


  selecionarIngrediente(
    ingrediente: string,
    event: any
  ) {

    if (event.target.checked) {

      this.ingredientesRemovidos.push(
        ingrediente
      );

    } else {

      this.ingredientesRemovidos =
        this.ingredientesRemovidos.filter(
          item => item !== ingrediente
        );

    }

  }


  confirmIngredients() {

    if (!this.produtoSelecionado) {
      return;
    }

    this.produtoSelecionado.removed =
      [...this.ingredientesRemovidos];

    this.aberto = false;

  }


  closeIngredients() {

    this.aberto = false;

  }

}