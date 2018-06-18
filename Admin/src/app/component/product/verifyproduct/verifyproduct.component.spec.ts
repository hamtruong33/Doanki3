import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyproductComponent } from './verifyproduct.component';

describe('VerifyproductComponent', () => {
  let component: VerifyproductComponent;
  let fixture: ComponentFixture<VerifyproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
