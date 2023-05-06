import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMyGroupComponent} from './cabinet-my-group.component';

describe('CabinetMyGroupComponent', () => {
  let component: CabinetMyGroupComponent;
  let fixture: ComponentFixture<CabinetMyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMyGroupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
