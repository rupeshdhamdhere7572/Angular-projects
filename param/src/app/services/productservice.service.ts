import { Injectable } from '@angular/core';
import { product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  
  p?: product[];
  getProducts()
  {
    this.p=[
    new product(1001, "Keyboard", 300, 10),
      new product(1002, "Mouse", 100, 20),
      new product(1003, "Laptop", 100, 10),
      new product(1004, "Chair", 300, 10),
      new product(1005, "Pendrive", 300, 10),

    ]
    return this.p;


  }
}
