import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetMyPageComponent} from './cabinet-my-page.component';

describe('CabinetMyPageComponent', () => {
  let component: CabinetMyPageComponent;
  let fixture: ComponentFixture<CabinetMyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetMyPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetMyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
