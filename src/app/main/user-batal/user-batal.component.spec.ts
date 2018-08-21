import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBatalComponent } from './user-batal.component';

describe('UserBatalComponent', () => {
  let component: UserBatalComponent;
  let fixture: ComponentFixture<UserBatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
