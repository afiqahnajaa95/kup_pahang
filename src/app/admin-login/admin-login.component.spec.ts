import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupLoginComponent } from './kup-login.component';

describe('KupLoginComponent', () => {
  let component: KupLoginComponent;
  let fixture: ComponentFixture<KupLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
