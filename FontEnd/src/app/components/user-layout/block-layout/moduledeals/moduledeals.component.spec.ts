import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuledealsComponent } from './moduledeals.component';

describe('ModuledealsComponent', () => {
  let component: ModuledealsComponent;
  let fixture: ComponentFixture<ModuledealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuledealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuledealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
