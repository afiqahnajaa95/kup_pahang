import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitangguhkanKIVComponent } from './ditangguhkan-kiv.component';

describe('DitangguhkanKIVComponent', () => {
  let component: DitangguhkanKIVComponent;
  let fixture: ComponentFixture<DitangguhkanKIVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitangguhkanKIVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitangguhkanKIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
