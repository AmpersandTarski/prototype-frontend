import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTABLEComponent } from './box-table.component';

describe('BoxTABLEComponent', () => {
  let component: BoxTABLEComponent;
  let fixture: ComponentFixture<BoxTABLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTABLEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxTABLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
