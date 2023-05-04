import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetSupervisorMenuComponent} from './cabinet-supervisor-menu.component';

describe('CabinetMenuSupervisorComponent', () => {
  let component: CabinetSupervisorMenuComponent;
  let fixture: ComponentFixture<CabinetSupervisorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetSupervisorMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetSupervisorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
