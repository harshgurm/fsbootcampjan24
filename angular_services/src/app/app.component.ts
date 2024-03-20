import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_services';

  docCount: number = 0;

  countService: CountService = inject(CountService);

  constructor(){
    this.docCount = this.countService.numOfDoctors;
  }

}
