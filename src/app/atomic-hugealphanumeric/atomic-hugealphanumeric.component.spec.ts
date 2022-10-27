import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicHUGEALPHANUMERICComponent } from './atomic-hugealphanumeric.component';

describe('AtomicHUGEALPHANUMERICComponent', () => {
  let component: AtomicHUGEALPHANUMERICComponent;
  let fixture: ComponentFixture<AtomicHUGEALPHANUMERICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicHUGEALPHANUMERICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicHUGEALPHANUMERICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
