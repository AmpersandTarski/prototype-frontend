import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDATEComponent } from './atomic-date.component';

describe('AtomicDATEComponent', () => {
  let component: AtomicDATEComponent;
  let fixture: ComponentFixture<AtomicDATEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicDATEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicDATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
