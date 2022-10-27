import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicFLOATComponent } from './atomic-float.component';

describe('AtomicFLOATComponent', () => {
  let component: AtomicFLOATComponent;
  let fixture: ComponentFixture<AtomicFLOATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicFLOATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicFLOATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
