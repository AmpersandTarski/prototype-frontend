import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicINTEGERComponent } from './atomic-integer.component';

describe('AtomicINTEGERComponent', () => {
  let component: AtomicINTEGERComponent;
  let fixture: ComponentFixture<AtomicINTEGERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicINTEGERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicINTEGERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
