import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartProduct } from '../../services/cart-service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.html',
})
export class CartPage {

  private cartService = inject(CartService);

  get cart(): CartProduct[] {
    return this.cartService.getCart();
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  get currency(): string {
    return this.cartService.getCurrency();
  }

  more(id: string): void {
    this.cartService.increase(id);
  }

  less(id: string): void {
    this.cartService.decrease(id);
  }
}
