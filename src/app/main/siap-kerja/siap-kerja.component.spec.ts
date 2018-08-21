import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiapKerjaComponent } from './siap-kerja.component';

describe('SiapKerjaComponent', () => {
  let component: SiapKerjaComponent;
  let fixture: ComponentFixture<SiapKerjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiapKerjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiapKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
