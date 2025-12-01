import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-prod-tabla-derecha',
  standalone: true,
  templateUrl: './prod-tabla-derecha.html',
})
export class DerechaComponent {

  cartService = inject(CartService);

  get productos() {
    return this.cartService.getCart();
  }
}
