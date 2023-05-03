import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuUserComponent} from './cabinet-menu-user.component';

describe('CabinetMenuUserComponent', () => {
  let component: CabinetMenuUserComponent;
  let fixture: ComponentFixture<CabinetMenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuUserComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
