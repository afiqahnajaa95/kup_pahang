import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulaKerjaComponent } from './mula-kerja.component';

describe('MulaKerjaComponent', () => {
  let component: MulaKerjaComponent;
  let fixture: ComponentFixture<MulaKerjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulaKerjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulaKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
