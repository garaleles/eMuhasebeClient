import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import {CheckRegisterPayrollDetailModel} from "../models/check-register-payroll-detail.model";
=======
import {CheckRegisterPayrollDetail} from "../models/check-register-payroll-detail.model";

>>>>>>> e28ae8e (çek çıkış bordrosu ciro ,delete tamamlandı)

@Pipe({
  name: 'checkRegisterPayrollDetail',
  standalone: true
})
export class CheckRegisterPayrollDetailPipe implements PipeTransform {

<<<<<<< HEAD
  transform(value: CheckRegisterPayrollDetailModel[], search: string): CheckRegisterPayrollDetailModel[] {
    if (!search) return value;

    return value.filter(p =>
      p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.type.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
=======
  transform(value: CheckRegisterPayrollDetail[], search: string): CheckRegisterPayrollDetail[] {
    if (!search) return value;

    return value.filter(p =>
      p.description?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
>>>>>>> e28ae8e (çek çıkış bordrosu ciro ,delete tamamlandı)
      p.checkNumber.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.bankName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.branchName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.dueDate.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.amount.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
<<<<<<< HEAD
      p.cashier.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.endorser.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.payer.toLocaleLowerCase().includes(search.toLocaleLowerCase())


=======
      p.endorser.toLocaleLowerCase().includes(search.toLocaleLowerCase())
>>>>>>> e28ae8e (çek çıkış bordrosu ciro ,delete tamamlandı)
    );
  }

}
