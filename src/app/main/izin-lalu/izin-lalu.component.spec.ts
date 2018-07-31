import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzinLaluComponent } from './izin-lalu.component';

describe('IzinLaluComponent', () => {
  let component: IzinLaluComponent;
  let fixture: ComponentFixture<IzinLaluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzinLaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzinLaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
