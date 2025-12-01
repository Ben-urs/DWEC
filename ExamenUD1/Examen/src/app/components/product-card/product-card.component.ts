import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  @Input() product!: IProduct;
    //private productService = inject(ProductService);
    //private router = inject(Router);
    private cartService = inject(CartService);


  //deleteProduct() {
    //this.productService.deleteProduct(this.product);
  //}

  //editProduct() {
    //this.router.navigate(['/producto', this.product._id]);
  //}

  addToCart(): void {
    this.cartService.addProduct(this.product, 1);
  }
}
