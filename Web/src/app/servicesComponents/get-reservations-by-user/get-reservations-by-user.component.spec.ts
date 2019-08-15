import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GetReservationsByUserComponent} from './get-reservations-by-user.component';

describe('GetReservationsByUserComponent', () => {
  let component: GetReservationsByUserComponent;
  let fixture: ComponentFixture<GetReservationsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetReservationsByUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReservationsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
