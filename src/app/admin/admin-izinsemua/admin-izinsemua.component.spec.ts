import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIzinSemuaComponent } from './admin-izinsemua.component';

describe('AdminIzinSemuaComponent', () => {
  let component: AdminIzinSemuaComponent;
  let fixture: ComponentFixture<AdminIzinSemuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIzinSemuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIzinSemuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
