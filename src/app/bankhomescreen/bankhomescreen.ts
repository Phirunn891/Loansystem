import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bankhomescreen',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './bankhomescreen.html',
  styleUrl: './bankhomescreen.css'
})
export class Bankhomescreen {
  sidebarItems = [
    { label: 'Dashboard', icon: 'fas fa-th-large', active: true, route: '/bankhomescreen' },
    { label: 'Active Loans', icon: 'fas fa-wallet', active: false, route: '/activeloans' },
    { label: 'Repayment', icon: 'fas fa-history', active: false, route: '/repayment' },
    { label: 'Applications', icon: 'fas fa-file-alt', active: false, route: '/bankhomescreen' }
  ];



  summaryCards = [
    { 
      title: 'Total Balance', 
      value: '$42,500.00', 
      badge: 'USD',
      footer: 'Reduced by 12% this month', 
      footerIcon: 'fas fa-long-arrow-alt-down',
      icon: 'fas fa-wallet'
    },
    { 
      title: 'Next Payment Due', 
      value: '$1,240.50', 
      badge: '12 DAYS LEFT',
      footer: 'Due on October 24, 2023',
      icon: 'far fa-calendar-alt'
    },
    { 
      title: 'Active Loans', 
      value: '03', 
      footer: '',
      icon: 'fas fa-file-invoice-dollar'
    }
  ];

  chartData = [
    { month: 'MAY', principal: 40, interest: 60 },
    { month: 'JUN', principal: 70, interest: 30 },
    { month: 'JUL', principal: 50, interest: 50 },
    { month: 'AUG', principal: 20, interest: 80 },
    { month: 'SEP', principal: 60, interest: 40 },
    { month: 'OCT', principal: 80, interest: 20 }
  ];

  requiredActions = [
    { title: 'Update KYC Details', deadline: 'Oct 28, 2023', icon: 'fas fa-shield-alt' }
  ];
}

