import { Component, Input } from '@angular/core';
import { Person } from '../person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item = '';
  @Input() per:Person[] = [];
}
