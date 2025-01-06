import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationDevelopmentServiceComponent } from './application-development-service.component';

describe('ApplicationDevelopmentServiceComponent', () => {
  let component: ApplicationDevelopmentServiceComponent;
  let fixture: ComponentFixture<ApplicationDevelopmentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationDevelopmentServiceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApplicationDevelopmentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
