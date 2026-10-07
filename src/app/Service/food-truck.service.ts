import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {

  products: any[] = [

    {
      name: "X-Burger Artesanal",
      price: 28.90,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
      description: "Hambúrguer artesanal 180g, queijo cheddar, alface, tomate e molho especial",
      ingredients: [
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Molho especial"
      ]
    },

    {
      name: "X-Bacon Deluxe",
      price: 32.90,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000",
      description: "Hambúrguer 180g, bacon crocante, cheddar, cebola caramelizada e barbecue",
      ingredients: [
        "Bacon",
        "Cheddar",
        "Cebola caramelizada",
        "Barbecue"
      ]
    },

    {
      name: "Pizza Margherita",
      price: 42.00,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
      description: "Molho de tomate, mussarela de búfala, manjericão fresco e azeite",
      ingredients: [
        "Mussarela",
        "Manjericão",
        "Azeite"
      ]
    },

    {
      name: "Pizza especial",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
      description: "Molho de tomate, mussarela, pepperoni e orégano",
      ingredients: [
        "Pepperoni",
        "Mussarela",
        "Orégano"
      ]
    },

    {
      name: "Batata Frita Suprema",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000",
      description: "Batatas fritas crocantes com temperos especiais e molhos à escolha",
      ingredients: [
        "Cheddar",
        "Bacon",
        "Molho especial"
      ]
    },

    {
      name: "Batata Rústica",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1000",
      description: "Batatas rústicas com casca, alecrim e parmesão",
      ingredients: [
        "Alecrim",
        "Parmesão"
      ]
    }

  ];

  cart: any[] = [];

  orders: any[] = [];


  // =========================
  // CARRINHO
  // =========================

  addToCart(index: number) {

    const product = this.products[index];

    const removed = product.removed || [];

    const existing = this.cart.find(item =>
      item.name === product.name &&
      JSON.stringify(item.removed) ===
      JSON.stringify(removed)
    );

    if (existing) {

      existing.quantity++;

    } else {

      this.cart.push({
        ...product,
        quantity: 1,
        removed: [...removed]
      });

    }

    product.removed = [];
  }


  increase(index: number) {

    this.cart[index].quantity++;

  }


  decrease(index: number) {

    if (this.cart[index].quantity > 1) {

      this.cart[index].quantity--;

    } else {

      this.cart.splice(index, 1);

    }

  }


  getTotal(): number {

    return this.cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

  }


  getCount(): number {

    return this.cart.reduce(
      (count, item) =>
        count + item.quantity,
      0
    );

  }


  // =========================
  // PEDIDOS
  // =========================

  addOrder(order: any) {

    this.orders.push(order);

  }

}