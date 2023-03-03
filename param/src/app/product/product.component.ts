import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductserviceService } from '../services/productservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private pinfo:ProductserviceService) { }
  pdata?: product;
  
  ngOnInit(): void {
    this.pdata; this.pinfo.getProducts();
  }

}
