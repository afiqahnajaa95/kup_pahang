import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WangCagaranComponent } from './wang-cagaran.component';

describe('WangCagaranComponent', () => {
  let component: WangCagaranComponent;
  let fixture: ComponentFixture<WangCagaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WangCagaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WangCagaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
