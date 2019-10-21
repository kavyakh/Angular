import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductData } from '../product-data';
import { ProductService } from '../product.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//  products:Product[]=new ProductData().getProductList();
 products:Product[]
 childData:string;
 selectedProduct: Product;
 errorMessage: any;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(responseData=>this.products=responseData,error=>{this.errorMessage=error; window.alert(this.errorMessage); });
  
    
  }
onSelect(product:Product)
  {
    this.selectedProduct=product;
  }
  share(){
    window.alert('This Product has been shared');
  }
  notifyUser(event){
    console.log(event);
    this.childData=event;
    window.alert(event);

  }
}
