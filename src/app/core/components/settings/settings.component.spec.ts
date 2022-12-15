import { LocalService } from './../../../shared/services/local.service';
import { SettingsService } from './../../services/settings.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [
        SettingsService,
        LocalService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  ', () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    fixture.detectChanges();
    const settings = fixture.componentInstance;
    expect(settings).toBeTruthy();
  });


});
