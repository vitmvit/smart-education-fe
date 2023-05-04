import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetStudentLeadMenuComponent} from './cabinet-student-lead-menu.component';

describe('CabinetMenuStudentLeadComponent', () => {
  let component: CabinetStudentLeadMenuComponent;
  let fixture: ComponentFixture<CabinetStudentLeadMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetStudentLeadMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetStudentLeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
