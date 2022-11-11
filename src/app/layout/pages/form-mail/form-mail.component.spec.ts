import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMailComponent } from './form-mail.component';

describe('FormMailComponent', () => {
  let component: FormMailComponent;
  let fixture: ComponentFixture<FormMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
