import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSalesNotesProvComponent } from './register-sales-notes-prov.component';

describe('RegisterSalesNotesProvComponent', () => {
  let component: RegisterSalesNotesProvComponent;
  let fixture: ComponentFixture<RegisterSalesNotesProvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSalesNotesProvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSalesNotesProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
