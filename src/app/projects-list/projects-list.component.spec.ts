import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsListComponent} from './projects-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogRef, MatSelectModule, MatSnackBarModule} from '@angular/material';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';

describe('ProjectsListComponent', () => {
    let component: ProjectsListComponent;
    let fixture: ComponentFixture<ProjectsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                MaterialModule,
                MatSelectModule,
                MatSnackBarModule,
            ],
            declarations: [
                ProjectsListComponent,
            ],
            providers: [
                {provide: MatDialogRef, useValue: {}},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsListComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
