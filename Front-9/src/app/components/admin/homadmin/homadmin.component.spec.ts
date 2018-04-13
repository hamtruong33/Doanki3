import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomadminComponent } from './homadmin.component';

describe('HomadminComponent', () => {
  let component: HomadminComponent;
  let fixture: ComponentFixture<HomadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
