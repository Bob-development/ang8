import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: any[] = [
    {
        category: 'Pizza',
        id: 0,
        title: 'New Pizza',
        price: 100,
        description: 'New pizzza come here to taste it!'
    },
    {
        category: 'Pizza',
        id: 1,
        title: 'Spice Pizza',
        price: 150,
        description: 'Spice pizzza come here to taste it!'
    },
    {
        category: 'Pizza',
        id: 2,
        title: 'Exotic Pizza',
        price: 200,
        description: 'Exotic pizzza come here to taste it!'
    },
    {
        category: 'Burger',
        id: 0,
        title: 'New Burger',
        price: 50,
        description: 'New Burger come here to taste it!'
    },
    {
        category: 'Burger',
        id: 1,
        title: 'Spice Burger',
        price: 70,
        description: 'Spice Burger come here to taste it!'
    },
    {
        category: 'Burger',
        id: 2,
        title: 'Exotic Burger',
        price: 90,
        description: 'Exotic Burger come here to taste it!'
    },
    {
        category: 'Shaverma',
        id: 0,
        title: 'New Shaverma',
        price: 120,
        description: 'New Shaverma come here to taste it!'
    },
    {
        category: 'Shaverma',
        id: 1,
        title: 'Spice Shaverma',
        price: 160,
        description: 'Spice Shaverma come here to taste it!'
    },
    {
        category: 'Shaverma',
        id: 2,
        title: 'Exotic Shaverma',
        price: 200,
        description: 'Exotic Shaverma come here to taste it!'
    }
]

  private productsCategory: any[] = [
    {value: 'Pizza', viewValue: 'Pizza'},
    {value: 'Burger', viewValue: 'Burger'},
    {value: 'Shaverma', viewValue: 'Shaverma'},
  ];

  constructor() {}

  public getProducts(){
    return this.products;
  }

  public getProductsCategory(){
    return this.productsCategory;
  }

  public getPizzas(){
    return this.products.filter(el => el.category === 'Pizza');
  }

  public getBurgers(){
    return this.products.filter(el => el.category === 'Burger');
  }

  public getShavermas(){
    return this.products.filter(el => el.category === 'Shaverma');
  }

  public addProduct(product: any){
      const categoryProducts = this.products.filter(el => el.category === product.category);
      
      product.id = categoryProducts[categoryProducts.length - 1].id + 1;

      this.products.push(product);

      console.log(this.products);
      
    }
}
