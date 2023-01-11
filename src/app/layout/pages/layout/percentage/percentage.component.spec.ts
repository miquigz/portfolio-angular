import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageComponent } from './percentage.component';

describe('PercentageComponent', () => {
  let component: PercentageComponent;
  let fixture: ComponentFixture<PercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
