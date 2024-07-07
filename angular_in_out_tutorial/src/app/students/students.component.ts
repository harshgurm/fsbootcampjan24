import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @Input() websiteTitle:string = '';
  @Input() childPerson!: object;  
  // @Input() childPerson:object = {};
  @Output() newItemEvent = new EventEmitter<string>();
  

  test = 'test value'; 
  addNewItem(val:string){
    console.log(this.newItemEvent);
    this.newItemEvent.emit(val);
  }

  ngOnInit(){
    // this.websiteTitle = 'This is title';
    console.log('ngOnInit is called', this.websiteTitle);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges is called', changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck is called');
  }

  constructor(){
    // this.websiteTitle = 'This is title';
    console.log('Constructor is called', this.websiteTitle);
  }

  ngOnDestroy(){
    console.log('Destory is called');
  }

}
