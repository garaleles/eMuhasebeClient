<<<<<<< HEAD
import {CheckStatus} from "./check-status.enum";

export class CheckDetail {
  id:string = '';
  status: CheckStatus = CheckStatus.InPortfolio;
=======
import {CheckStatusEnum} from "./chequeissue-payroll.model";


export class CheckDetail {
  id:string = '';
  status: CheckStatusEnum = new CheckStatusEnum();
  statusValue: number = 0;
>>>>>>> e28ae8e (çek çıkış bordrosu ciro ,delete tamamlandı)
  dueDate: string = '';
  issuedDate?: string;
  collectedDate?: string;
  amount: number = 0;
  description?: string;
  checkNumber: string = '';
  bankName: string = '';
  branchName: string = '';
  accountNumber: string = '';
  debtor: string = '';
  creditor: string = '';
  endorser: string = '';
}
