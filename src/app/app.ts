import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './componentes/footer/footer';
import { Menu } from './componentes/menu/menu';
import { CartModal } from './componentes/cart-modal/cart-modal';
import { CheckoutModal } from './componentes/checkout-modal/checkout-modal';
import { Header } from './componentes/header/header';
import { ModalOverlay } from './componentes/modal-overlay/modal-overlay';
import { ProductCard } from './componentes/product-card/product-card';
import { OrdersModal } from './componentes/orders-modal/orders-modal';

@Component({
  selector: 'app-root',
  imports: [Footer, Menu, CartModal, CheckoutModal, Header, ModalOverlay, OrdersModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula06-Desafio_Projeto-Integrador');
}
