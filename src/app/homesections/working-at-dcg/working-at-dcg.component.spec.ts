import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingAtDcgComponent } from './working-at-dcg.component';

describe('WorkingAtDcgComponent', () => {
  let component: WorkingAtDcgComponent;
  let fixture: ComponentFixture<WorkingAtDcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingAtDcgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingAtDcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
