import { ApiService } from '../../services/api.service';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-prod-tabla-derecha',
  imports: [],
  templateUrl: './prod-tabla-derecha.html',
  styleUrl: './prod-tabla-derecha.css',
})

export class DerechaComponent {
  CarritoServices = inject(ApiService);
  productosAnadidos: any[];
  producto:any;
  currency: string;
  precioTotal: number;

  constructor(){
    this.productosAnadidos = [];
    this.producto = {
      title: '',
      price: '',
      sku : '',
      cantidad: 0
    }

    this.currency = '';
    this.precioTotal = 0;
  }

  ngOnInit(){
    this.productosAnadidos = this.CarritoServices.getproductosTotalesDerecha();
    this.currency = this.CarritoServices.getCurrency();
    this.precioTotal = this.CarritoServices.getPrecioTotal();
  }
}
