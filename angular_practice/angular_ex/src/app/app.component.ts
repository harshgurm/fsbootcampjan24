import { Component, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './person';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CountServiceService } from './count-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, FormsModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular App';

  color_red = "red";
  color_yellow = "yellow";

  person: Person = {id:3710683, name: "Marwa"};

  // persons: Person[] = [ // create an array of students
  // {id:1, name: "Harry"},
  // {id:2, name: "Gurm"},
  // {id:3, name: "Test"}
  // ];

  currentItem = 'Television';

  isDisabled: boolean = false;
  isToggle: boolean = false;

  persons: Person[] = [];

  docCount: number = 0;


  imagUrl = "https://buffer.com/library/content/images/2023/10/free-images.jpg";

  countService:CountServiceService = inject(CountServiceService);

  personService: DataService = inject(DataService);
  
  constructor() {
    this.persons = this.personService.getAllPersons();
    this.docCount = this.countService.count();
    this.countService.getEmployees().subscribe((result) => {
      console.log(result);
    });
    // console.log(this.persons);
  }

  clearImage() {
    this.imagUrl = '';    
  }

  addImage() {
    this.imagUrl = 'https://buffer.com/library/content/images/2023/10/free-images.jpg';
  }

  actionName = 'Test';

  styleClass: string="font-size: 20px; color: green;"

  name: string = '';
  
  setValue() {
    this.name = 'Nancy';
  }

  test:boolean = false;

}
