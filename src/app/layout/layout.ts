import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  sidebarItems = [
    { label: 'Dashboard', icon: 'fas fa-th-large', active: true, route: '/bankhomescreen' },
    { label: 'Active Loans', icon: 'fas fa-wallet', active: false, route: '/activeloans' },
    { label: 'Repayment', icon: 'fas fa-history', active: false, route: '/repayment' },
    { label: 'Applications', icon: 'fas fa-file-alt', active: false, route: '/bankhomescreen' }
  ];

  constructor(private router: Router) {
    // Dynamically update active state based on current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.setActiveItem(event.urlAfterRedirects);
    });
    
    // Initial set
    this.setActiveItem(this.router.url);
  }

  setActiveItem(url: string) {
    this.sidebarItems.forEach(item => {
      item.active = url.startsWith(item.route);
    });
  }
}
