import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('FormMailComponent', () => {
    let home: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent]
        })
        .compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        home = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(home).toBeTruthy();
    });

    it(`should have a variable called "niebla" with value 'false' as default`, ()=>{
        fixture = TestBed.createComponent(HomeComponent);
        const home = fixture.componentInstance;
        expect(home.niebla).toEqual(false);
    })

    it(`should switch value of the variable "niebla", enComponente(valor:boolean)`, ()=>{
        fixture = TestBed.createComponent(HomeComponent);
        const home = fixture.componentInstance;;
        const mockedData= {value1:false, value2:true};
        home.enComponente(mockedData.value1);
        expect(home.niebla).toEqual(mockedData.value1); //Expected Result False
        home.enComponente(mockedData.value2);
        expect(home.niebla).toEqual(mockedData.value2); //Expected Result True
    })
});
