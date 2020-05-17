import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseThirdComponent } from './response-third.component';

describe('ResponseThirdComponent', () => {
  let component: ResponseThirdComponent;
  let fixture: ComponentFixture<ResponseThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
