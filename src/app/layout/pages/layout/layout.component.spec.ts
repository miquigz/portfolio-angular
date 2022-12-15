import { LayoutComponent } from './layout.component';
import { TESTING_PROVIDERS } from './../../../spec/constants';
import { TestBed } from '@angular/core/testing';

describe('LayoutComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LayoutComponent
            ],
            providers: [ TESTING_PROVIDERS ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(LayoutComponent);
        fixture.detectChanges();
        const layout = fixture.componentInstance;
        expect(layout).toBeDefined();
    });
        
    it('should create the LayoutComponent', () => {
        const fixture = TestBed.createComponent(LayoutComponent);
        fixture.detectChanges();
        const layout = fixture.componentInstance;
        expect(layout).toBeTruthy();
    });

}