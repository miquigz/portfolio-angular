import { SettingsService } from './services/settings.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalService } from './services/local.service';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers:[SettingsService, LocalService]
})
export class CoreModule { }
