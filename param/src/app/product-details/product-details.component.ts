import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product';
import { ProductserviceService } from '../services/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private actroute: ActivatedRoute, private pinfo: ProductserviceService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  para?: product;
  id: any;
  sub: any;
  ngonInit(): void {
    this.sub = this.actroute.paramMap.subscribe
      ((params) => {

        console.log(params);
        this.id = params.get('id');
        let product = this.pinfo.getProducts();
        this.para = product.find((p) =>
          p.productId === this.id);
      });
    

  }
  onBack(): void{
    this.router.navigate(['product']);
  }
}
