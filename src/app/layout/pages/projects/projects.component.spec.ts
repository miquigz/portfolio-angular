import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
    let projects: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsComponent]
        })
        .compileComponents();
        fixture = TestBed.createComponent(ProjectsComponent);
        projects = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(projects).toBeTruthy();
    });

    it(`should have a variable called "hoverActual" with value '' as default`, ()=>{
        fixture = TestBed.createComponent(ProjectsComponent);
        const projects = fixture.componentInstance;
        expect(projects.hoverActual).toEqual('');
    })

    it(`should change the value of the variable called "hoverActual", changeActComponent(actComponent:string)`, ()=>{
        fixture = TestBed.createComponent(ProjectsComponent);
        const projects = fixture.componentInstance;;
        const mockedData= {value:"exampleText"};
        projects.changeActComponent(mockedData.value);
        expect(projects.hoverActual).toEqual('exampleText'); //Expected Result "exampleText"
    })

    it(`should have a array variable called "projects" with length === 4`, ()=>{
        fixture = TestBed.createComponent(ProjectsComponent);
        const projects = fixture.componentInstance;
        expect(projects.projects.length).toEqual(4);
    });
});
