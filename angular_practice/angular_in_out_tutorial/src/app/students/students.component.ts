import { Component, Input, Output, EventEmitter, SimpleChanges, inject } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  changeCount: number = 0;
  @Input() websiteTitle:string = '';
  @Input() childPerson!: object;  
  // @Input() childPerson:object = {};
  @Output() newItemEvent = new EventEmitter<string>();
  
  studentService = inject(StudentsService);

  addNewItem(val:string){
    this.newItemEvent.emit(val);
  }

  constructor() {
    console.log(`constructor ${this.websiteTitle}`);
  }

  //detect every change in the child component
  //include FormsModule in app.module.ts
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges' ,changes);

    // for (let key in changes) {
    //   console.log(`${key} changed`)
    //   console.log(changes[key].currentValue)
    //   console.log(changes[key].previousValue)
    // }

  }

  ngOnInit() {
    console.log('ngOnInit' ,this.websiteTitle);
    this.websiteTitle = "Hello";
    console.log('ngOnInit' ,this.websiteTitle);
    this.studentService.getStudents().subscribe((result:any) => {
      console.log(result);
    })
  }

  ngDoCheck() {
    console.log("ngDoCheck", this.websiteTitle)
    this.changeCount++;
    console.log('counter ' + this.changeCount);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit",  this.websiteTitle);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked",  this.websiteTitle);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit",  this.websiteTitle);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked",  this.websiteTitle);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy",  this.websiteTitle);
  }

}
