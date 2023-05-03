import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuStudentComponent} from './cabinet-menu-student.component';

describe('CabinetMenuStudentComponent', () => {
  let component: CabinetMenuStudentComponent;
  let fixture: ComponentFixture<CabinetMenuStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuStudentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
