import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-despreciation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './despreciation.html',
  styleUrl: './despreciation.css'
})
export class Despreciation {
  currentStep: number = 3;
  principal: number = 45000;
  interest: number = 4.2;
  duration: number = 24;
  purpose: string = 'Business Expansion';
  monthlyIncome: number = 5000;
  
  monthlyPayment: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;
  
  loanTable: any[] = [];

  constructor() {
    this.calculate();
  }

  setDuration(t: number) {
    this.duration = t;
    this.calculate();
  }

  calculate() {
    // Despreciation (similar to Flat Rate for this demo)
    const monthlyPrincipal = this.principal / this.duration;
    const monthlyInterest = this.principal * (this.interest / 100 / 12);
    
    this.monthlyPayment = monthlyPrincipal + monthlyInterest;
    this.totalInterest = monthlyInterest * this.duration;
    this.totalAmount = this.principal + this.totalInterest;
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.generateSchedule();
      this.currentStep = 4;
    }
  }

  prevStep() {
    if (this.currentStep > 3) {
      this.currentStep = 3;
    }
  }

  generateSchedule() {
    this.loanTable = [];
    const monthlyPrincipal = this.principal / this.duration;
    const monthlyInterest = this.principal * (this.interest / 100 / 12);
    let remainingBalance = this.totalAmount;

    for (let i = 1; i <= this.duration; i++) {
        remainingBalance -= this.monthlyPayment;
        this.loanTable.push({
            no: i,
            principal: monthlyPrincipal,
            interest: monthlyInterest,
            payment: this.monthlyPayment,
            balance: Math.max(0, remainingBalance),
            date: this.getFutureDate(i)
        });
    }
  }

  getFutureDate(months: number): string {
    const date = new Date();
    date.setMonth(date.getMonth() + months);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
}
