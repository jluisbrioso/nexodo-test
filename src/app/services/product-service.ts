import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

   private products: IProduct[] = [
      {
         "active":true,
         "id":318348,
         "color":"azul",
         "name":"Agua",
         "costprice":0.00000,
         "price1":1.50000,
         "price2":1.50000,
         "price3":1.50000,
         "price4":1.50000,
         "price5":0.00000
      },
      {
         "active":true,
         "id":318355,
         "color":"gris",
         "name":"Refresco",
         "costprice":0.50000,
         "price1":3.00000,
         "price2":3.00000,
         "price3":3.00000,
         "price4":3.00000,
         "price5":0.00000
      },
      {
         "active":true,
         "id":318359,
         "color":"naranja",
         "name":"Zumos",
         "costprice":0.00000,
         "price1":2.00000,
         "price2":2.50000,
         "price3":2.50000,
         "price4":2.50000,
         "price5":0.00000
      },
      {
         "active":false,
         "id":318353,
         "color":"morado",
         "name":"Copas Vino",
         "costprice":0.00000,
         "price1":2.50000,
         "price2":2.50000,
         "price3":2.50000,
         "price4":2.50000,
         "price5":0.00000
      },
      {
         "active":true,
         "id":318357,
         "color":"rojo",
         "name":"Tintos",
         "costprice":0.00000,
         "price1":2.50000,
         "price2":2.50000,
         "price3":2.50000,
         "price4":2.50000,
         "price5":0.00000
      },
      {
         "active":true,
         "id":318351,
         "color":"negro",
         "name":"Caf\u00e9",
         "costprice":0.20000,
         "price1":1.50000,
         "price2":1.50000,
         "price3":1.50000,
         "price4":1.50000,
         "price5":0.00000
      },
      {
         "active":true,
         "id":318352,
         "color":"azul",
         "name":"Caf\u00e9 Descafeinado",
         "costprice":0.00000,
         "price1":1.50000,
         "price2":1.50000,
         "price3":1.50000,
         "price4":1.50000,
         "price5":0.00000
      },
      {
         "active":true,
         "id":318354,
         "color":"blanco",
         "name":"Infusiones",
         "costprice":0.00000,
         "price1":1.50000,
         "price2":1.50000,
         "price3":1.50000,
         "price4":1.50000,
         "price5":0.00000
      },
      {
         "active":false,
         "id":318350,
         "color":"verde",
         "name":"Batidos",
         "costprice":0.00000,
         "price1":0.00000,
         "price2":0.00000,
         "price3":0.00000,
         "price4":0.00000,
         "price5":0.00000
      }
   ];

  constructor() { }

   getProduct(id: number): IProduct {
      return this.products.filter((p) => p.id === id)[0];
   }

   getProducts(): IProduct[] {
      return this.products;
   }

}