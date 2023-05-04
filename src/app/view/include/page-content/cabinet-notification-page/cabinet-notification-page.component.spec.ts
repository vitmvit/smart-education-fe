import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetNotificationPageComponent} from './cabinet-notification-page.component';

describe('CabinetNotificationComponent', () => {
  let component: CabinetNotificationPageComponent;
  let fixture: ComponentFixture<CabinetNotificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetNotificationPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetNotificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
