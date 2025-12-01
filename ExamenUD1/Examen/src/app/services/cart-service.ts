import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart: CartProduct[] = [];
  private currency = '€';

  addProduct(product: IProduct, cantidad: number = 1): void {
    const index = this.cart.findIndex(p => p.id === product.id);

    if (index !== -1) {
      this.cart[index].cantidad += cantidad;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        cantidad,
      });
    }
  }

  increase(id: string): void {
    const item = this.cart.find(p => p.id === id);
    if (item) item.cantidad++;
  }

  decrease(id: string): void {
    const index = this.cart.findIndex(p => p.id === id);
    if (index !== -1) {
      this.cart[index].cantidad--;
      if (this.cart[index].cantidad === 0) {
        this.cart.splice(index, 1);
      }
    }
  }

  getCart(): CartProduct[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);
  }

  getCurrency(): string {
    return this.currency;
  }
}
