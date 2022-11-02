import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicOBJECTComponent } from './atomic-object.component';

describe('AtomicOBJECTComponent', () => {
  let component: AtomicOBJECTComponent;
  let fixture: ComponentFixture<AtomicOBJECTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicOBJECTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicOBJECTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
