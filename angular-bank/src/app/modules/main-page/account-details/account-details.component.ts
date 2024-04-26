import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  accountno: number;
  balance: number;

  constructor(private authService: AuthService){
    this.accountno = this.authService.getAccountNo();
    this.balance = this.authService.getBalance();
  }

}
