import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.ProductService.showMenssage('produto criado!');
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
