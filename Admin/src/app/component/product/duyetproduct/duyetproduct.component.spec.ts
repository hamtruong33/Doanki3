import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetproductComponent } from './duyetproduct.component';

describe('DuyetproductComponent', () => {
  let component: DuyetproductComponent;
  let fixture: ComponentFixture<DuyetproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyetproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
