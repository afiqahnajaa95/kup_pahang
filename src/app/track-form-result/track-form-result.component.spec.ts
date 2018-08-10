import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFormResultComponent } from './track-form-result.component';

describe('TrackFormResultComponent', () => {
  let component: TrackFormResultComponent;
  let fixture: ComponentFixture<TrackFormResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackFormResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
