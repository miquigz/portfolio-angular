import { NameComponent } from './name.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('NameComponent', () => {
    let nameComp: NameComponent;
    let fixture: ComponentFixture<NameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NameComponent]
        })
        .compileComponents();
        fixture = TestBed.createComponent(NameComponent);
        nameComp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(nameComp).toBeTruthy();
    });
});
