import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public products: IProduct[];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {

    this.products = this.ProductService.getProducts();
    console.log(this.products);

  }

}
