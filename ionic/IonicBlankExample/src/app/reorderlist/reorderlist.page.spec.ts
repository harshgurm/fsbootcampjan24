import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReorderlistPage } from './reorderlist.page';

describe('ReorderlistPage', () => {
  let component: ReorderlistPage;
  let fixture: ComponentFixture<ReorderlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
