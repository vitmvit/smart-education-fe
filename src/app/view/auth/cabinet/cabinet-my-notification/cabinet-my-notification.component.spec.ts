import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMyNotificationComponent} from './cabinet-my-notification.component';

describe('CabinetMyNotificationComponent', () => {
  let component: CabinetMyNotificationComponent;
  let fixture: ComponentFixture<CabinetMyNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMyNotificationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
