import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersModal } from './orders-modal';

describe('OrdersModal', () => {
  let component: OrdersModal;
  let fixture: ComponentFixture<OrdersModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersModal],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
