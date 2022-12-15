import { TESTING_PROVIDERS } from './../../../spec/constants';
import { AboutMeComponent } from './about-me.component';
import { TestBed } from '@angular/core/testing';

describe('AboutMeComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AboutMeComponent
            ],
            providers: [ TESTING_PROVIDERS ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(AboutMeComponent);
        fixture.detectChanges();
        const aboutMe = fixture.componentInstance;
        expect(aboutMe).toBeDefined();
    });
        
    it('should create the aboutMeComponent', () => {
        const fixture = TestBed.createComponent(AboutMeComponent);
        fixture.detectChanges();
        const aboutMe = fixture.componentInstance;
        expect(aboutMe).toBeTruthy();
    });

    it(`should a variable called "succesMessage" defined`, ()=>{
        const fixture = TestBed.createComponent(AboutMeComponent);
        fixture.detectChanges();
        const aboutMe = fixture.componentInstance;
        expect(aboutMe.succesMessage).toBeDefined();
    })

    it(`should a function called "successDownload" defined`, ()=>{
        const fixture = TestBed.createComponent(AboutMeComponent);
        fixture.detectChanges();
        const aboutMe = fixture.componentInstance;
        expect(aboutMe.successDownload).toBeDefined();
    });

    it(`should a function called "openFormMail" defined`, ()=>{
        const fixture = TestBed.createComponent(AboutMeComponent);
        fixture.detectChanges();
        const aboutMe = fixture.componentInstance;
        expect(aboutMe.openFormMail).toBeDefined();
    });

    

}