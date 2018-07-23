import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupFormComponent } from './kup-form.component';

describe('KupFormComponent', () => {
  let component: KupFormComponent;
  let fixture: ComponentFixture<KupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
