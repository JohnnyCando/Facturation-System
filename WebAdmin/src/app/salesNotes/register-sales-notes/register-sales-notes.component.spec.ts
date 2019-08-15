import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSalesNotesComponent } from './register-sales-notes.component';

describe('RegisterSalesNotesComponent', () => {
  let component: RegisterSalesNotesComponent;
  let fixture: ComponentFixture<RegisterSalesNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSalesNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSalesNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
