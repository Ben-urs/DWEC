import { Product } from '../interfaces/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private listaProductoizquierda: Product[];
  private currency: string;
  private precioTotal: number;
  private cantidad: number;
  private productoderecha:any[];

  constructor() {
    this.currency = '';
    this.listaProductoizquierda = [];

    fetch("http://localhost:8080/api/carrito")
      .then((response) => response.json())

      .then(data => {
        this.currency = data.currency;

        data.products.forEach((producto: Product) => {
        this.listaProductoizquierda.push(producto);

        });
      });

    this.precioTotal = 0;
    this.cantidad = 0;
    this.productoderecha = [];
  }

  getAllProductos(): Product[] {
    return this.listaProductoizquierda;
  }

  getCurrency(): string {
    return this.currency;

  }

  getCantidad(): number {
    return this.cantidad;
  }

  //Funcion eliminar producto 
  restarProducto(productoComprado: any) {
    let index = this.productoderecha.findIndex(p => p.sku === productoComprado.sku); 

    if (index !== -1) {

      if (productoComprado.cantidad === 0) {  
        this.productoderecha.splice(index, 1);
      } 
      
      else {
        this.productoderecha[index].cantidad = productoComprado.cantidad;  
      }
    }

    this.precioTotal -= productoComprado.price; 
  }

  //Funcion agregar producto 
  sumarProducto(productoComprado: any) {  
    let index = this.productoderecha.findIndex(p => p.sku === productoComprado.sku); 

    if (index !== -1) {
      this.productoderecha[index].cantidad = productoComprado.cantidad; 
    } 
    
    else {
      this.productoderecha.push(productoComprado); 
    }

    this.precioTotal += productoComprado.price; 
  }

  getPrecioTotal(){
    return this.precioTotal;
  }

  getproductosTotalesDerecha(){
    return this.productoderecha;
  }
}

