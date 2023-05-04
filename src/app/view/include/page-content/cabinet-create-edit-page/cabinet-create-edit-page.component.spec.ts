import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetCreateEditPageComponent} from './cabinet-create-edit-page.component';

describe('CabinetCreatePageComponent', () => {
  let component: CabinetCreateEditPageComponent;
  let fixture: ComponentFixture<CabinetCreateEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetCreateEditPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetCreateEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
