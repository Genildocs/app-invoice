import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  darkModeOn: boolean = false;
  ngOnInit(): void {
    const html = document.querySelector('html');
    html?.setAttribute(
      'data-mode',
      localStorage.getItem('data-mode') || 'light'
    );
  }
  darkMode() {
    const html = document.querySelector('html');

    if (localStorage.getItem('data-mode') !== 'dark') {
      html?.setAttribute('data-mode', 'dark');
      localStorage.setItem('data-mode', 'dark');
      this.darkModeOn = true;
    } else {
      html?.setAttribute('data-mode', 'light');
      localStorage.setItem('data-mode', 'light');
      this.darkModeOn = false;
    }
  }
}
