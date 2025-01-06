import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReEngineeringServicesComponent } from './app-re-engineering-services.component';

describe('AppReEngineeringServicesComponent', () => {
  let component: AppReEngineeringServicesComponent;
  let fixture: ComponentFixture<AppReEngineeringServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppReEngineeringServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppReEngineeringServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
