import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatmapComponent } from './flatmap.component';

describe('FlatmapComponent', () => {
  let component: FlatmapComponent;
  let fixture: ComponentFixture<FlatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
