import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMenuRootComponent} from './cabinet-menu-root.component';

describe('CabinetMenuRootComponent', () => {
  let component: CabinetMenuRootComponent;
  let fixture: ComponentFixture<CabinetMenuRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMenuRootComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMenuRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
