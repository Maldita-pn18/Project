import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDrivenComponent } from './parent-driven.component';

describe('ParentDrivenComponent', () => {
  let component: ParentDrivenComponent;
  let fixture: ComponentFixture<ParentDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
