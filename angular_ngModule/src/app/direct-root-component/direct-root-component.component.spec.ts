import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectRootComponentComponent } from './direct-root-component.component';

describe('DirectRootComponentComponent', () => {
  let component: DirectRootComponentComponent;
  let fixture: ComponentFixture<DirectRootComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectRootComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectRootComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
