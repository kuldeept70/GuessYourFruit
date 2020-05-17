import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseFirstComponent } from './response-first.component';

describe('ResponseFirstComponent', () => {
  let component: ResponseFirstComponent;
  let fixture: ComponentFixture<ResponseFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
