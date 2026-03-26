import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-repayment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './repayment.html',
  styleUrl: './repayment.css'
})
export class Repayment {
  totalBalance: string = '$24,580.00';
  nextPaymentDate: string = 'Oct 14, 2023';
  installmentAmount: string = '$1,240.50';
  userWorkEmail: string = 'alexander.r@ateliermedia.com';

  paymentHistory = [
    {
      id: 'TXN-882910',
      date: 'Sep 14, 2023',
      type: 'Automatic Debit',
      methodIcon: 'fas fa-university',
      methodLabel: 'Chase •••• 4412',
      amount: '$1,240.50',
      status: 'PAID',
      statusClass: 'paid'
    },
    {
      id: 'TXN-882455',
      date: 'Aug 28, 2023',
      type: 'Manual Early Payment',
      methodIcon: 'fas fa-credit-card',
      methodLabel: 'Visa •••• 1092',
      amount: '$5,000.00',
      status: 'PAID',
      statusClass: 'paid'
    },
    {
      id: 'TXN-882312',
      date: 'Aug 14, 2023',
      type: 'Automatic Debit',
      methodIcon: 'fas fa-university',
      methodLabel: 'Chase •••• 4412',
      amount: '$1,240.50',
      status: 'PENDING',
      statusClass: 'pending'
    },
    {
      id: 'TXN-881902',
      date: 'Jul 14, 2023',
      type: 'Automatic Debit',
      methodIcon: 'fas fa-university',
      methodLabel: 'Chase •••• 4412',
      amount: '$1,240.50',
      status: 'OVERDUE',
      statusClass: 'overdue'
    }
  ];

  sidebarItems = [
    { label: 'Dashboard', icon: 'fas fa-th-large', active: false, route: '/bankhomescreen' },
    { label: 'Active Loans', icon: 'fas fa-wallet', active: false, route: '/activeloans' },
    { label: 'Repayment', icon: 'fas fa-history', active: true, route: '/repayment' },
    { label: 'Applications', icon: 'fas fa-file-alt', active: false, route: '/bankhomescreen' }
  ];
}
