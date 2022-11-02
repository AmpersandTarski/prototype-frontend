import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicPASSWORDComponent } from './atomic-password.component';

describe('AtomicPASSWORDComponent', () => {
  let component: AtomicPASSWORDComponent;
  let fixture: ComponentFixture<AtomicPASSWORDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicPASSWORDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicPASSWORDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
