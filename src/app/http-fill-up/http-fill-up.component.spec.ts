import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFillUpComponent } from './http-fill-up.component';

describe('HttpFillUpComponent', () => {
  let component: HttpFillUpComponent;
  let fixture: ComponentFixture<HttpFillUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFillUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFillUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
