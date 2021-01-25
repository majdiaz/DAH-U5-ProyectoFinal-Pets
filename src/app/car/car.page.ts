import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  public car: Car;
  constructor(private carService: CarService) {
    this.car = this.carService.getCar();
  }

  ngOnInit() {
  }

}
