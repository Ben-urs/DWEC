import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  standalone: true,
  selector: 'app-products-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './products-form.html',
})
export class ProductsForm {

  productService = inject(ProductService);
  router = inject(Router);

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  save(): void {
    const product = this.productForm.value as IProduct;

    const newProduct: IProduct = {
      id: crypto.randomUUID(),
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      active: true,
    };

    this.productService.addLocalProduct(newProduct);
    this.router.navigate(['/productos']);
  }
}
