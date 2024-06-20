import {CheckStatus} from "./check-status.enum";

export class CheckDetail {
  id:string = '';
  status: CheckStatus = CheckStatus.InPortfolio;
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
