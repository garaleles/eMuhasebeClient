import { CurrencyTypeModel } from './currency-type.model';
export class CashRegisterModel {
  id: string = "";
  name: string = "";
  debt: number = 0;
  receivable: number = 0;
  balance: number = 0;
  description: string = "";
  date: Date = new Date();
  currencyType: CurrencyTypeModel = new CurrencyTypeModel();
  currencyTypeValue: number = 0;
}
