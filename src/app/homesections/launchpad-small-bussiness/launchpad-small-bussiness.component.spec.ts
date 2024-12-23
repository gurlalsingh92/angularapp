import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadSmallBussinessComponent } from './launchpad-small-bussiness.component';

describe('LaunchpadSmallBussinessComponent', () => {
  let component: LaunchpadSmallBussinessComponent;
  let fixture: ComponentFixture<LaunchpadSmallBussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchpadSmallBussinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchpadSmallBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
