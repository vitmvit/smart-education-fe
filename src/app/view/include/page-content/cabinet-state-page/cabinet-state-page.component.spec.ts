import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetStatePageComponent} from './cabinet-state-page.component';

describe('CabinetStateStudentComponent', () => {
  let component: CabinetStatePageComponent;
  let fixture: ComponentFixture<CabinetStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetStatePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
