import { PerfilComponent } from './perfil.component';
import { TESTING_PROVIDERS } from '../../../spec/constants.providers';
import { TestBed } from '@angular/core/testing';

describe('PerfilComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PerfilComponent
            ],
            providers: [ TESTING_PROVIDERS ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(PerfilComponent);
        fixture.detectChanges();
        const perfil = fixture.componentInstance;
        expect(perfil).toBeDefined();
    });
        
    it('should create the PerfilComponent', () => {
        const fixture = TestBed.createComponent(PerfilComponent);
        fixture.detectChanges();
        const perfil = fixture.componentInstance;
        expect(perfil).toBeTruthy();
    });

}