import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalesNotesByUserComponent } from './get-sales-notes-by-user.component';

describe('GetSalesNotesByUserComponent', () => {
  let component: GetSalesNotesByUserComponent;
  let fixture: ComponentFixture<GetSalesNotesByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSalesNotesByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSalesNotesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
