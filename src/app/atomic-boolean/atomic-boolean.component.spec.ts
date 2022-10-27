import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicBOOLEANComponent } from './atomic-boolean.component';

describe('AtomicBOOLEANComponent', () => {
  let component: AtomicBOOLEANComponent;
  let fixture: ComponentFixture<AtomicBOOLEANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicBOOLEANComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicBOOLEANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
