import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMyStatisticsComponent} from './cabinet-my-statistics.component';

describe('CabinetMyStatisticsComponent', () => {
  let component: CabinetMyStatisticsComponent;
  let fixture: ComponentFixture<CabinetMyStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMyStatisticsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
