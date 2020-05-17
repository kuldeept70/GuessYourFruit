import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseFourthComponent } from './response-fourth.component';

describe('ResponseFourthComponent', () => {
  let component: ResponseFourthComponent;
  let fixture: ComponentFixture<ResponseFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
