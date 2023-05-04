import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetStudentMenuComponent} from './cabinet-student-menu.component';

describe('CabinetMenuStudentComponent', () => {
  let component: CabinetStudentMenuComponent;
  let fixture: ComponentFixture<CabinetStudentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetStudentMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetStudentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
