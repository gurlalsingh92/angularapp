import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyItComponent } from './simplify-it.component';

describe('SimplifyItComponent', () => {
  let component: SimplifyItComponent;
  let fixture: ComponentFixture<SimplifyItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplifyItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplifyItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
