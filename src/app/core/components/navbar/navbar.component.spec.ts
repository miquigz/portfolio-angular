import { SettingsService } from './../../services/settings.service';
import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NavbarComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                NavbarComponent
            ],
            imports:[
                BrowserAnimationsModule
            ],
            providers:[
                SettingsService
            ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const navbar = fixture.componentInstance;
        expect(navbar).toBeDefined();
    });
        
    it('should create the navbarComponent', () => {
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const navbar = fixture.componentInstance;
        expect(navbar).toBeTruthy();
    });

    it('should have a variable called "isOpen" with value "true" as default',()=>{
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const navbar = fixture.componentInstance;
        expect(navbar.isOpen).toBeTruthy; //Validation that it exists
        expect(navbar.isOpen).toEqual(true);
    })

    it(`should have a variable called "mostrar" with value '' as default`, ()=>{
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const navbar = fixture.componentInstance;
        expect(navbar.mostrar).toBeTruthy;
        expect(navbar.mostrar).toEqual('');
    })
    
    it(`should switch value of variable called "isOpen" in true/false, toggle()`, ()=>{
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement
        const navbar = fixture.componentInstance;
        //"isOpen" default value is true
        navbar.toggle();
        expect(navbar.isOpen).toEqual(false) //ExpectedResult 1 - False
        navbar.toggle();
        expect(navbar.isOpen).toEqual(true) //ExpectedResult 2 - True
    })

    it(`should have a class called "animate__jello" in the variable "menu" as default`, ()=>{
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const navbar = fixture.componentInstance;

        expect(navbar.menu.nativeElement.classList.contains('animate__jello')).toBeTrue
    })

    it(`should switch class of variable called "menu", animateClickMenu(openClose:boolean)`, ()=>{
        const fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
        const navbar = fixture.componentInstance;

        const mockedData = {value1:false , value2:true}

        navbar.animateClickMenu(mockedData.value1);
        expect(navbar.menu.nativeElement.classList.contains('animate__rubberBand')).toBeTrue;
        expect(navbar.menu.nativeElement.classList.contains('animate__jello')).toBeFalse;

        navbar.animateClickMenu(mockedData.value2);
        expect(navbar.menu.nativeElement.classList.contains('animate__rubberBand')).toBeFalse;
        expect(navbar.menu.nativeElement.classList.contains('animate__jello')).toBeTrue;
    })

}
