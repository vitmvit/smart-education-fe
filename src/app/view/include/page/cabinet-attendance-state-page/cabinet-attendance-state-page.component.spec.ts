import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetAttendanceStatePageComponent} from './cabinet-attendance-state-page.component';

describe('CabinetAttendanceStatePageComponent', () => {
  let component: CabinetAttendanceStatePageComponent;
  let fixture: ComponentFixture<CabinetAttendanceStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetAttendanceStatePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetAttendanceStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
