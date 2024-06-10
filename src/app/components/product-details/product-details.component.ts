import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../models/product.model";
import {SharedModule} from "../../modules/shared.module";
import {ProductDetailPipe} from "../../pipes/product-detail.pipe";
import {ExpenseDetailPipe} from "../../pipes/expense-detail.pipe";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule, ProductDetailPipe, ExpenseDetailPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: ProductModel = new ProductModel();
  productId: string = "";
  search:string = "";
  p: number = 1;

  constructor(
    private http: HttpService,
    private activated: ActivatedRoute
  ){
    this.activated.params.subscribe(res=> {
      this.productId = res["id"];

      this.getAll();
    })
  }

  getAll(){
    this.http.post<ProductModel>("ProductDetails/GetAll",
      {productId: this.productId},(res)=> {
        this.product = res;
      });
  }

  calculateRunningBalance(details: any[]): any[] {
    let runningBalance = 0; // Yürüyen bakiye değişkeni

    return details.map(detail => {
      runningBalance += detail.deposit - detail.withdrawal;

      // Yeni bir nesne oluşturarak orijinal veriyi değiştirme
      return {
        ...detail,
        balance: runningBalance
      };
    });
  }
}
