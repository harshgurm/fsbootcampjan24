import { Component,  Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';

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
