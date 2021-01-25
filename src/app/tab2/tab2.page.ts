import { Component } from '@angular/core';
import { Product } from "../models/product";
import { ProductService } from "../services/product.service";
import { CarService } from "../services/car.service";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public products: Product[];
  
  constructor(private pService: ProductService, private carService: CarService) {
    this.products = this.pService.getProducts();
  }

  public addToCar(p: Product): void {
    this.carService.updateCar(p);
  }
}
