import { WelcomeComponent } from './welcome.component';
import { TestBed } from '@angular/core/testing';

describe('WelcomeComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                WelcomeComponent
            ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(WelcomeComponent);
        fixture.detectChanges();
        const welcome = fixture.componentInstance;
        expect(welcome).toBeDefined();
    });
        
    it('should create the WelcomeComponent', () => {
        const fixture = TestBed.createComponent(WelcomeComponent);
        fixture.detectChanges();
        const welcome = fixture.componentInstance;
        expect(welcome).toBeTruthy();
    });

}