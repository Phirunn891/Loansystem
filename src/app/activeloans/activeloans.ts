import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activeloans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './activeloans.html',
  styleUrl: './activeloans.css'
})
export class Activeloans {
  loans = [
    {
      id: 'L-2023-001',
      type: 'Classic Loan',
      amount: '$15,000.00',
      remaining: '$8,240.50',
      status: 'In Progress',
      progress: 45,
      nextPayment: 'Oct 15, 2023',
      interestRate: '4.2%',
      icon: 'fas fa-university',
      route: '/classicloan'
    },
    {
      id: 'L-2023-085',
      type: 'Fix Principal',
      amount: '$45,000.00',
      remaining: '$42,500.00',
      status: 'Healthy',
      progress: 12,
      nextPayment: 'Oct 24, 2023',
      interestRate: '4.2%',
      icon: 'fas fa-hand-holding-usd',
      route: '/fixprincipal'
    },
    {
      id: 'L-2022-112',
      type: 'Despreciation Loan',
      amount: '$2,000.00',
      remaining: '$400.00',
      status: 'Closing Soon',
      progress: 80,
      nextPayment: 'Sep 28, 2023',
      interestRate: '2.0%',
      icon: 'fas fa-chart-line',
      route: '/despreciation'
    }
  ];

  sidebarItems = [
    { label: 'Dashboard', icon: 'fas fa-th-large', active: false, route: '/bankhomescreen' },
    { label: 'Active Loans', icon: 'fas fa-wallet', active: true, route: '/activeloans' },
    { label: 'Repayment', icon: 'fas fa-history', active: false, route: '/repayment' },
    { label: 'Applications', icon: 'fas fa-file-alt', active: false, route: '/bankhomescreen' }
  ];

}
