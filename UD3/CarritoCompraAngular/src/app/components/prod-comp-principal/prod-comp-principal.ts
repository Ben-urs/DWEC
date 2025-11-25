import { ApiService } from '../../services/api.service';
import { Component, inject, Input} from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-prod-comp-principal',
  imports: [],
  templateUrl: './prod-comp-principal.html',
  styleUrl: './prod-comp-principal.css',
})

export class ProductoPrincipalIzquierda {
  CarritoServices = inject(ApiService);
  cantidad: number = 0;

  @Input() producto!: Product;
  @Input() currency!: string;
  
  //Funcion boton restar 
   botonRestar():void {  
    if(this.cantidad > 0){
      this.cantidad--;
    }

    let productoCarrito ={
      sku: this.producto.sku,
      title: this.producto.title,
      price: Number(this.producto.price),
      cantidad: this.cantidad
    };

    this.CarritoServices.restarProducto(productoCarrito);  
  }
  //Funcion boton sumar 
  btnSumar():void { 
    this.cantidad++;
    let productoCarrito ={
      sku: this.producto.sku,
      title: this.producto.title,
      price: Number(this.producto.price),
      cantidad: this.cantidad
    };

    this.CarritoServices.sumarProducto(productoCarrito); 
  }

 

}
