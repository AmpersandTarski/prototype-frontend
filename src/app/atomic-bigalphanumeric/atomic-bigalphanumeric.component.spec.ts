import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicBIGALPHANUMERICComponent } from './atomic-bigalphanumeric.component';

describe('AtomicBIGALPHANUMERICComponent', () => {
  let component: AtomicBIGALPHANUMERICComponent;
  let fixture: ComponentFixture<AtomicBIGALPHANUMERICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicBIGALPHANUMERICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicBIGALPHANUMERICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
