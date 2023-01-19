import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselProjectsComponent } from './carrousel-projects.component';

describe('CarrouselProjectsComponent', () => {
  let component: CarrouselProjectsComponent;
  let fixture: ComponentFixture<CarrouselProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
