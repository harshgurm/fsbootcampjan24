import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeEmployeeComponent } from './full-time-employee.component';

describe('FullTimeEmployeeComponent', () => {
  let component: FullTimeEmployeeComponent;
  let fixture: ComponentFixture<FullTimeEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullTimeEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullTimeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
