import { ProjectItemComponent } from './project-item.component';
import { TestBed } from '@angular/core/testing';

describe('ProjectItemComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ProjectItemComponent
            ]
        }).compileComponents();
    });

    tests();
});

function tests(){
    it(`should be initialized`, () => {
        const fixture = TestBed.createComponent(ProjectItemComponent);
        fixture.detectChanges();
        const projectItem = fixture.componentInstance;
        expect(projectItem).toBeDefined();
    });
        
    it('should create the ProjectItemComponent', () => {
        const fixture = TestBed.createComponent(ProjectItemComponent);
        fixture.detectChanges();
        const projectItem = fixture.componentInstance;
        expect(projectItem).toBeTruthy();
    });

}