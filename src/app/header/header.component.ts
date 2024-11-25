import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile: boolean = false; // Initially false, will be set based on screen size

  constructor() {
    this.checkScreenSize();
  }

  // Listen to window resize to toggle the visibility of mobile menu button
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  // Method to check screen size
  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 768;
    }
  }

  toggleMenu() {
    // Logic to toggle menu visibility (for mobile only)
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
      menu.classList.toggle('open'); // Toggle 'open' class to adjust padding
    }
  }
}


