import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetStudentsStatisticsComponent} from './cabinet-students-statistics.component';

describe('CabinetStudentsStatisticsComponent', () => {
  let component: CabinetStudentsStatisticsComponent;
  let fixture: ComponentFixture<CabinetStudentsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetStudentsStatisticsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetStudentsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
