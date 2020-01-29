import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDrivenComponent } from './child-driven.component';

describe('ChildDrivenComponent', () => {
  let component: ChildDrivenComponent;
  let fixture: ComponentFixture<ChildDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
