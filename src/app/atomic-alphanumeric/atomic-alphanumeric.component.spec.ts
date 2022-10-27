import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicALPHANUMERICComponent } from './atomic-alphanumeric.component';

describe('AtomicALPHANUMERICComponent', () => {
  let component: AtomicALPHANUMERICComponent;
  let fixture: ComponentFixture<AtomicALPHANUMERICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicALPHANUMERICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicALPHANUMERICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
