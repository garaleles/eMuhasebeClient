import {CheckType} from "./check-type.enum";
import {CheckStatus} from "./check-status.enum";
import {CheckDetail} from "./check-detail.model";

export class Check {
  id:string = '';
  checkType: CheckType = CheckType.Inward;
  status: CheckStatus = CheckStatus.InPortfolio;
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
