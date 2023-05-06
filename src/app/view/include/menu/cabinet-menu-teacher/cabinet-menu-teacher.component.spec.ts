import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuTeacherComponent} from './cabinet-menu-teacher.component';

describe('CabinetMenuTeacherComponent', () => {
  let component: CabinetMenuTeacherComponent;
  let fixture: ComponentFixture<CabinetMenuTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuTeacherComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
