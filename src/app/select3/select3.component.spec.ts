import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select3Component } from './select3.component';

describe('Select3Component', () => {
  let component: Select3Component;
  let fixture: ComponentFixture<Select3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
