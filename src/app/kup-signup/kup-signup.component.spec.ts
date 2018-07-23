import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupSignupComponent } from './kup-signup.component';

describe('KupSignupComponent', () => {
  let component: KupSignupComponent;
  let fixture: ComponentFixture<KupSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
