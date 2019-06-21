import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: IProduct;
  private id: number;
  private options: Array<number> = [];

  constructor(private route: ActivatedRoute, private ProductService: ProductService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.product = this.ProductService.getProduct(this.id);
    this.optionMaker(this.product, 5);
  }

  optionMaker(prod: IProduct, pricesNumber: number) {
    for (let index = 0; index < pricesNumber; index++) {
      if (prod['price' + (index + 1)] != 0) {
        this.options.push(prod['price' + (index + 1)]);
      }
    }
  }

}
