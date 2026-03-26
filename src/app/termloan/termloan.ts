import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
interface loanGenerate {
  month: number;
  principal: number;
  monthlyInterest: number;
  totalpricipal: number;
  date: string;
}
@Component({
  selector: 'app-termloan',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './termloan.html',
  styleUrl: './termloan.css'
})
export class Termloan {
     // Input Defualt
  cashInput: string = '2000';
  interestInput: string = '2';
  durationInput: number = 10;
  totalAmount : number = 2400;
  date: string = '2025-08-01';

  // Calculated values
  principal: number = 2000;
  interest: number = 2;
  duration: number = 10;
  totalPrincipal: number = 0;
  totalInterest: number = 0;
  loanTable: loanGenerate[] = [];

  constructor() {
    this.calculate();
  }

  calculate() {
    const monthlyPrincipal = this.principal / this.duration;
    let remainingPrincipal = this.principal;
    const [yearStr, monthStr, dayStr] = this.date.split('-');
    const principalEvery = 3
    let year = Number(yearStr);
    let month = Number(monthStr);
    let day = Number(dayStr);

    this.loanTable = [];

    for (let i = 1; i <= this.duration; i++) {
      const payPrincipal = i % principalEvery === 0 || i === this.duration;
      const principalPayment = payPrincipal ? monthlyPrincipal * principalEvery : 0;
      const monthlyInterest = remainingPrincipal * this.interest / 100;
      const totalMonthly = principalPayment + monthlyInterest;
      this.loanTable.push({
        month: i,
        principal: parseFloat(principalPayment.toFixed(2)),
        monthlyInterest: parseFloat(monthlyInterest.toFixed(2)),
        totalpricipal: parseFloat(totalMonthly.toFixed(2)),
        date: `${year}-${month}-${day}`
      });

      this.totalPrincipal += principalPayment;
      this.totalInterest += monthlyInterest;
      remainingPrincipal -= principalPayment;
      month += 1;
      if (month > 12) {
        month = 1;
        year += 1;
      }
    }
    this.totalAmount = this.totalPrincipal + this.totalInterest;
  } 
  getPrincial: string = '';
  getInterestInput: string = '';
  getDuration: string = '';
  getDate: string = ''; 
  customizeLoan() {
    this.principal = this.getPrincial == '' ? this.principal : Number(this.getPrincial);
    this.interest = this.getInterestInput == '' ? this.interest : Number(this.getInterestInput);
    this.duration = this.getDuration == '' ? this.duration : Number(this.getDuration);
    this.date = this.getDate == '' ? this.date : this.getDate;
    this.principal = Number(this.cashInput);
    this.interest = Number(this.interestInput);
    this.duration = Number(this.durationInput);
    this.date = (document.getElementById('typeDate') as HTMLInputElement)?.value || this.date;
    this.calculate();
  }
}
