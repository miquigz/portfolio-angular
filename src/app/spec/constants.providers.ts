import { HttpHandler } from '@angular/common/http';

//Providers
import { LocalService } from 'src/app/shared/services/local.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SettingsService } from '../core/services/settings.service';

const testingProviders = [
    { provide: SettingsService, useValue: {} },
    { provide: Router, useValue: {} },
    { provide: HttpClient , useValue: {}},
    { provide: 'LOCALSTORAGE', useValue: window.localStorage},
    { provide: LocalService , useValue: {}},
    { provide: HttpHandler , useValue: {}}
]

// const testingDeclarations = [
// ]

export const TESTING_PROVIDERS = [...testingProviders];
// export const TESTING_DECLARATIONS = [...testingDeclarations];