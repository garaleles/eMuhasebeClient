import {ProductModel} from "./product.model";

export class ProductDetailModel{
  id: string='';
  productId: string='';
  description: string='';
  date: string='';
  deposit: number=0;
  withdrawal: number=0;
  brutTotal: number=0;
  netTotal: number=0;
  grandTotal: number=0;
  discountTotal: number=0;
  vatTotal: number=0;
  vatRate: number=0;
  discountRate: number=0;
  price: number=0;
  product: ProductModel = new ProductModel();
}
