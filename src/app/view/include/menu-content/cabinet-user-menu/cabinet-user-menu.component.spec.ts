import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetUserMenuComponent} from './cabinet-user-menu.component';

describe('CabinetMenuUserComponent', () => {
  let component: CabinetUserMenuComponent;
  let fixture: ComponentFixture<CabinetUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetUserMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
