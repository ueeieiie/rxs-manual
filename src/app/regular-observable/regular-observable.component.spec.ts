import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularObservableComponent } from './regular-observable.component';

describe('RegularObservableComponent', () => {
  let component: RegularObservableComponent;
  let fixture: ComponentFixture<RegularObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
