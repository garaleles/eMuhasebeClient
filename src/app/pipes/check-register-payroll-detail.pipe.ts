import { Pipe, PipeTransform } from '@angular/core';
import {CheckRegisterPayrollDetailModel} from "../models/check-register-payroll-detail.model";

@Pipe({
  name: 'checkRegisterPayrollDetail',
  standalone: true
})
export class CheckRegisterPayrollDetailPipe implements PipeTransform {

  transform(value: CheckRegisterPayrollDetailModel[], search: string): CheckRegisterPayrollDetailModel[] {
    if (!search) return value;

    return value.filter(p =>
      p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.type.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.checkNumber.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.bankName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.branchName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.dueDate.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.amount.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.cashier.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.endorser.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.payer.toLocaleLowerCase().includes(search.toLocaleLowerCase())


    );
  }

}
