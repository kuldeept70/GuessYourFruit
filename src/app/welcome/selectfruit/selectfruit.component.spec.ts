import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectfruitComponent } from './selectfruit.component';

describe('SelectfruitComponent', () => {
  let component: SelectfruitComponent;
  let fixture: ComponentFixture<SelectfruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectfruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
