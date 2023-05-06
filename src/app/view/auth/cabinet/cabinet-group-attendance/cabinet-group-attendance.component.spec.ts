import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetGroupAttendanceComponent} from './cabinet-group-attendance.component';

describe('CabinetGroupAttendanceComponent', () => {
  let component: CabinetGroupAttendanceComponent;
  let fixture: ComponentFixture<CabinetGroupAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetGroupAttendanceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetGroupAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
