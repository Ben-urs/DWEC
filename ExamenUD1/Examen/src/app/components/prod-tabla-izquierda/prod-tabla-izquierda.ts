import { Component, inject } from '@angular/core';
import { ProductoPrincipalIzquierda } from '../prod-comp-principal/prod-comp-principal';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-prod-tabla-izquierda',
  standalone: true,
  imports: [ProductoPrincipalIzquierda],
  templateUrl: './prod-tabla-izquierda.html',
})
export class ListaProductosIzquierdaComponent {

  productService = inject(ProductService);
  listaProductos: IProduct[] = [];

  ngOnInit(): void {
    this.listaProductos = this.productService.getAllProducts();
  }
}
