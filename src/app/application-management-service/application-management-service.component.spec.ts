import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationManagementServiceComponent } from './application-management-service.component';

describe('ApplicationManagementServiceComponent', () => {
  let component: ApplicationManagementServiceComponent;
  let fixture: ComponentFixture<ApplicationManagementServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationManagementServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationManagementServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
