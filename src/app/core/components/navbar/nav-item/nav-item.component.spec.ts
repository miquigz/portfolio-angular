import { TESTING_PROVIDERS } from './../../../../spec/constants';
import { NavItemComponent } from './nav-item.component';
import { TestBed } from '@angular/core/testing';

describe('NavItemComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                NavItemComponent
            ],
            providers: [TESTING_PROVIDERS]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(NavItemComponent);
        fixture.detectChanges();
        const navItem = fixture.componentInstance;
        expect(navItem).toBeDefined();
    });
        
    it('should create the navItemComponent', () => {
        const fixture = TestBed.createComponent(NavItemComponent);
        fixture.detectChanges();
        const navItem = fixture.componentInstance;
        expect(navItem).toBeTruthy();
    });

}
