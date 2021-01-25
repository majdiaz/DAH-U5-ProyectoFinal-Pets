import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private car: Car;
  constructor() {
    this.car = {
      products : [],
      subtotal : 0,
      iva : 0,
      total : 0,
      qtyprod : 0,
      date : new Date()
    };
   }

   public getCar(): Car {
    return this.car;
  }

  public updateCar(prod: Product): Car {
    let c = 1;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.car.products.length; index++) {
      if (this.car.products[index].name === prod.name){
        c++;
        this.car.products[index].cant ++;
      }
    }

    if (c === 1){
      this.car.products.push(prod);
      this.car.subtotal += prod.price;
      this.car.iva = this.car.subtotal * 0.16;
      this.car.total = this.car.subtotal + this.car.iva;
      this.car.date = new Date();
      this.car.qtyprod ++ ;
    }
    else{
      this.car.subtotal += prod.price;
      this.car.iva = this.car.subtotal * 0.16;
      this.car.total = this.car.subtotal + this.car.iva;
      this.car.date = new Date();
      this.car.qtyprod ++ ;
    }
    c = 1;
    return this.car;
  }
}
