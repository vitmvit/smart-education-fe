import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetRootMenuComponent} from './cabinet-root-menu.component';

describe('CabinetMenuRootComponent', () => {
  let component: CabinetRootMenuComponent;
  let fixture: ComponentFixture<CabinetRootMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetRootMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetRootMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
