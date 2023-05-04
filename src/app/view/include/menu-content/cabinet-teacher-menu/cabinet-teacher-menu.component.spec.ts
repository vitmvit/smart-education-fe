import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetTeacherMenuComponent} from './cabinet-teacher-menu.component';

describe('CabinetMenuTeacherComponent', () => {
  let component: CabinetTeacherMenuComponent;
  let fixture: ComponentFixture<CabinetTeacherMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetTeacherMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetTeacherMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
