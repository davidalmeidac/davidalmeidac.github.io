import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  scrolled = false;
  menuOpen = false;

  constructor(readonly data: DataService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

  readonly nav = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/about' },
    { label: 'Experiencia', path: '/experience' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' },
  ];
}
