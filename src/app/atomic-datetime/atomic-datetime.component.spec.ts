import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDATETIMEComponent } from './atomic-datetime.component';

describe('AtomicDATETIMEComponent', () => {
  let component: AtomicDATETIMEComponent;
  let fixture: ComponentFixture<AtomicDATETIMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicDATETIMEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicDATETIMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
