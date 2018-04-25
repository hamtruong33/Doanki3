import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshopneedactiveComponent } from './listshopneedactive.component';

describe('ListshopneedactiveComponent', () => {
  let component: ListshopneedactiveComponent;
  let fixture: ComponentFixture<ListshopneedactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListshopneedactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshopneedactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
