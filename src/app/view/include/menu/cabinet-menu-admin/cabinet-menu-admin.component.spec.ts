import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuAdminComponent} from './cabinet-menu-admin.component';

describe('CabinetMenuAdminComponent', () => {
  let component: CabinetMenuAdminComponent;
  let fixture: ComponentFixture<CabinetMenuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuAdminComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
