import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSecondComponent } from './response-second.component';

describe('ResponseSecondComponent', () => {
  let component: ResponseSecondComponent;
  let fixture: ComponentFixture<ResponseSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
