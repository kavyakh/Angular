import {Product}from './product'
export class ProductData {
    productList:Product[]=[
        {
            productId:1001,
            name:"laptop",
            brand:"HP",
            price:45000
        },
   { productId:1002,
    name:"mobile",
    brand:"MI",
    price:1500
},
{ productId:1003,
name:"Washingmachine",
brand:"LG",
price:50985
   
 }
 
 ];
 
 getProductList():Product[]{
    return this.productList;
 }
}

