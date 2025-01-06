import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalAccessControlComponent } from './physical-access-control.component';

describe('PhysicalAccessControlComponent', () => {
  let component: PhysicalAccessControlComponent;
  let fixture: ComponentFixture<PhysicalAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalAccessControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
