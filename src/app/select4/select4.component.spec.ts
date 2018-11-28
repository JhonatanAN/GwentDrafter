import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select4Component } from './select4.component';

describe('Select4Component', () => {
  let component: Select4Component;
  let fixture: ComponentFixture<Select4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
