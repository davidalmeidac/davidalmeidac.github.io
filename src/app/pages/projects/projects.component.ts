import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  expanded: number | null = null;
  constructor(readonly data: DataService) {}
  toggle(i: number) { this.expanded = this.expanded === i ? null : i; }
}
