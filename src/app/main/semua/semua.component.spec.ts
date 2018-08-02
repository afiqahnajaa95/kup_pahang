import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemuaComponent } from './semua.component';

describe('SemuaComponent', () => {
  let component: SemuaComponent;
  let fixture: ComponentFixture<SemuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
