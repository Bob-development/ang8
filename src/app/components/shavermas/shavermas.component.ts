import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shavermas',
  templateUrl: './shavermas.component.html',
  styleUrl: './shavermas.component.css'
})
export class ShavermasComponent {
  constructor(
    public productsService: ProductsService
  ){}
}
