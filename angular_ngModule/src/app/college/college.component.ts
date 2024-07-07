import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  ngOnInit(): void {
    console.log('I am ngOnInit');
  }

  constructor() {
    console.log('I am being called here');    
  }

  
}
