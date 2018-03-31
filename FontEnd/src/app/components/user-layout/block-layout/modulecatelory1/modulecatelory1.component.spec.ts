import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulecatelory1Component } from './modulecatelory1.component';

describe('Modulecatelory1Component', () => {
  let component: Modulecatelory1Component;
  let fixture: ComponentFixture<Modulecatelory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulecatelory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulecatelory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
