import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetAdminPageComponent} from './cabinet-admin-page.component';

describe('CabinetAdminPageComponent', () => {
  let component: CabinetAdminPageComponent;
  let fixture: ComponentFixture<CabinetAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetAdminPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
