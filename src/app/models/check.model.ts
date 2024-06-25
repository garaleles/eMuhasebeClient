import {CheckType} from "./check-type.enum";
<<<<<<< HEAD
import {CheckStatus} from "./check-status.enum";
import {CheckDetail} from "./check-detail.model";
=======
import {CheckDetail} from "./check-detail.model";
import {CheckStatusEnum} from "./chequeissue-payroll.model";
>>>>>>> e28ae8e (çek çıkış bordrosu ciro ,delete tamamlandı)

export class Check {
  id:string = '';
  checkType: CheckType = CheckType.Inward;
<<<<<<< HEAD
  status: CheckStatus = CheckStatus.InPortfolio;
=======
  status: CheckStatusEnum = new CheckStatusEnum();
  statusValue: number = 0;
>>>>>>> e28ae8e (çek çıkış bordrosu ciro ,delete tamamlandı)
  dueDate: string = '';
  checkNumber: string = '';
  bankName: string = '';
  branchName: string = '';
  accountNumber: string = '';
  amount: number = 0;
  debtor: string = '';
  creditor: string = '';
  endorser: string = '';
  checkRegisterPayrollId: string = '';
  checkDetails?: CheckDetail[];
}
