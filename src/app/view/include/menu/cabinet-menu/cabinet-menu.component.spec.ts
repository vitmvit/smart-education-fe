import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuComponent} from './cabinet-menu.component';

describe('CabinetMenuComponent', () => {
  let component: CabinetMenuComponent;
  let fixture: ComponentFixture<CabinetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
