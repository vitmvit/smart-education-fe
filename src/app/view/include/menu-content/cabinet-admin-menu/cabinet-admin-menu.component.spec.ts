import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetAdminMenuComponent} from './cabinet-admin-menu.component';

describe('CabinetMenuAdminComponent', () => {
  let component: CabinetAdminMenuComponent;
  let fixture: ComponentFixture<CabinetAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetAdminMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
