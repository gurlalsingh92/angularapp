import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutScrollComponent } from './about-scroll.component';

describe('AboutScrollComponent', () => {
  let component: AboutScrollComponent;
  let fixture: ComponentFixture<AboutScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
