import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  router: Router = inject(Router);

  clearToken(){
    localStorage.removeItem('token');
    this.router.navigate(['signin']);
    // localStorage.clear();
  }
}
