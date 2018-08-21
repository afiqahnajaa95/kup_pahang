import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDitolakComponent } from './user-ditolak.component';

describe('UserDitolakComponent', () => {
  let component: UserDitolakComponent;
  let fixture: ComponentFixture<UserDitolakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDitolakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDitolakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
