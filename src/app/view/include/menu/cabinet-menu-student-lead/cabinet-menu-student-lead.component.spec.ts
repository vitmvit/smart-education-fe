import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuStudentLeadComponent} from './cabinet-menu-student-lead.component';

describe('CabinetMenuStudentLeadComponent', () => {
  let component: CabinetMenuStudentLeadComponent;
  let fixture: ComponentFixture<CabinetMenuStudentLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuStudentLeadComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuStudentLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
