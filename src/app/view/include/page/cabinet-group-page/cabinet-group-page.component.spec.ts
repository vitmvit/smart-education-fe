import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabinetGroupPageComponent} from './cabinet-group-page.component';

describe('CabinetGroupPageComponent', () => {
  let component: CabinetGroupPageComponent;
  let fixture: ComponentFixture<CabinetGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabinetGroupPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabinetGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
