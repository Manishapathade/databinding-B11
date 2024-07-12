import { Component } from "@angular/core";


 //decoretor
@Component({          
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]

    //we can use only one file
    // template : '<p>The product is PRODUCT_NAME with id PRODUCT_ID </p>',
    // styles : ['p{padding: 10px;border: 1px solid skyblue;border-radius: 5px;}']
})
export class ProductComponent {
    productName : string = "Iphone";
    productId : number = 2132;

    getproductName():string{
        return "Iphone 15";
    }
}