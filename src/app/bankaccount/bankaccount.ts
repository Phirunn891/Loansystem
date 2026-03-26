import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bankaccount',
  imports: [RouterModule],
  templateUrl: './bankaccount.html',
  styleUrl: './bankaccount.css'
})
export class Bankaccount {
  cash = [
  {
    account : "Payroll Account",
    money : 0.44, 
    cardnumber : "003 592 500",
    color : " border-left: 10px solid purple;"
  },
  {
    account : "Mobile Savings",
    money : 99.99,
    cardnumber : "001 150 030",
    color : " border-left: 10px solid rgb(247, 2, 2);"
  },
  {
    account : "Salary",
    money : 500.69,
    cardnumber : "222 334 002",
    color : " border-left: 10px solid rgb(2, 128, 247);"
  },
  {
    account : "Savings",
    money : 100.89,
    cardnumber : "232 444 102",
    color : " border-left: 10px solid rgb(26, 195, 0);"
  },
 ]
}
