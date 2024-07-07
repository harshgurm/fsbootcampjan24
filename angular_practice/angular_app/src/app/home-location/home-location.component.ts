import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-location.component.html',
  styleUrl: './home-location.component.css'
})
export class HomeLocationComponent {

  @Input() housingLocation!: Housinglocation;

}
