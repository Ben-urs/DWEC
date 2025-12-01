import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductService } from '../../services/product-service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './products-list.html',
})
export class ProductsList {

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  filtroTexto = '';
  filtroCategoria = 'all';

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    this.filteredProducts = this.products;
  }

  filtrar(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.filtroTexto.toLowerCase()) &&
      (this.filtroCategoria === 'all' || product.category === this.filtroCategoria)
    );
  }
}
