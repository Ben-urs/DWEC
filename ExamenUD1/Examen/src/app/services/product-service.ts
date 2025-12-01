import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private API = 'http://localhost:8080/api/products';
  private products: IProduct[] = [];

  constructor() {
    fetch(this.API)
      .then(res => res.json())
      .then(data => {
        this.products = data.products.map((p: any) => ({
          id: p.id,
          name: p.name,
          description: p.description,
          price: parseFloat(p.price),
          category: p.category,
          image: p.image,
          active: true,
        }));
      });
  }

  /* Produsctos */
  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: string): IProduct | undefined {
    return this.products.find(p => p.id === id);
  }

  /*  Añadir Producto */
  addLocalProduct(product: IProduct): void {
    this.products.push(product);
  }

  /* Borrar producto */

   deleteProduct(product: IProduct): void {
    this.products = this.products.filter(p => p !== product);
  }

   /* Actualizar producto */
  updateProduct(product: IProduct): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products.splice(index, 1, product);
    }

}
}
