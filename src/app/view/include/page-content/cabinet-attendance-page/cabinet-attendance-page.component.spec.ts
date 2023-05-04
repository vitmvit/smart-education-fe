import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetAttendancePageComponent} from './cabinet-attendance-page.component';

describe('CabinetAttendancePageComponent', () => {
  let component: CabinetAttendancePageComponent;
  let fixture: ComponentFixture<CabinetAttendancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetAttendancePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetAttendancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
