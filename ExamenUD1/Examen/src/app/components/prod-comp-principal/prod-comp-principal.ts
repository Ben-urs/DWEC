import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-prod-comp-principal',
  standalone: true,
  templateUrl: './prod-comp-principal.html',
  styleUrl: './prod-comp-principal.css',
})
export class ProductoPrincipalIzquierda {

  cartService = inject(CartService);
  cantidad = 0;

  @Input() producto!: IProduct;

  restar(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cartService.decrease(this.producto.id);
    }
  }

  sumar(): void {
    this.cantidad++;
    this.cartService.addProduct(this.producto, 1);
  }
}
