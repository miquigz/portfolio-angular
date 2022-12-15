import { FooterComponent } from './footer.component';
import { TestBed } from '@angular/core/testing';

describe('FooterComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                FooterComponent
            ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
        const footer = fixture.componentInstance;
        expect(footer).toBeDefined();
    });
        
    it('should create the footerComponent', () => {
        const fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
        const footer = fixture.componentInstance;
        expect(footer).toBeTruthy();
    });

}