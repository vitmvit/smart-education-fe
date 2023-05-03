import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuSupervisorComponent} from './cabinet-menu-supervisor.component';

describe('CabinetMenuSupervisorComponent', () => {
  let component: CabinetMenuSupervisorComponent;
  let fixture: ComponentFixture<CabinetMenuSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuSupervisorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
