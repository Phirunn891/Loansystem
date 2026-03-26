import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fixprincipal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './fixprincipal.html',
  styleUrl: './fixprincipal.css'
})
export class Fixprincipal {
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
    // Reducing Balance calculation for summary
    const monthlyPrincipal = this.principal / this.duration;
    let tempRemaining = this.principal;
    this.totalInterest = 0;

    for (let i = 1; i <= this.duration; i++) {
        const monthlyInterest = (tempRemaining * (this.interest / 100)) / 12;
        this.totalInterest += monthlyInterest;
        tempRemaining -= monthlyPrincipal;
    }

    this.totalAmount = this.principal + this.totalInterest;
    this.monthlyPayment = this.totalAmount / this.duration; // Average for display, or show max? Usually Fix principal starts high and goes low.
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
    let remainingPrincipal = this.principal;

    for (let i = 1; i <= this.duration; i++) {
        const monthlyInterest = (remainingPrincipal * (this.interest / 100)) / 12;
        const totalMonthly = monthlyPrincipal + monthlyInterest;
        remainingPrincipal -= monthlyPrincipal;

        this.loanTable.push({
            no: i,
            principal: monthlyPrincipal,
            interest: monthlyInterest,
            payment: totalMonthly,
            balance: Math.max(0, remainingPrincipal),
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
