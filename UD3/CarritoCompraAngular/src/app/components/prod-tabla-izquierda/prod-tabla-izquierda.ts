import { ApiService } from '../../services/api.service';
import { Component, inject } from '@angular/core';
import { ProductoPrincipalIzquierda } from "../prod-comp-principal/prod-comp-principal";
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-prod-tabla-izquierda',
  standalone: true,
  imports: [ProductoPrincipalIzquierda],
  templateUrl: './prod-tabla-izquierda.html',
  styleUrls: ['./prod-tabla-izquierda.css'],
})

export class ListaProductosIzquierdaComponent {
  ServicioCarrito = inject(ApiService);
  listaProductos: Product[] = [];
  currency: string = '';
  cantidad!: number;

  ngOnInit(): void {
    this.listaProductos = this.ServicioCarrito.getAllProductos();
    this.currency = this.ServicioCarrito.getCurrency();
    this.cantidad = this.ServicioCarrito.getCantidad();
  }
}
