import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectEditComponent} from './project-edit.component';
import {
    MAT_DIALOG_DATA,
    MatCardModule,
    MatDialogModule,
    MatDialogRef,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule
} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

describe('ProjectEditComponent', () => {
    let component: ProjectEditComponent;
    let fixture: ComponentFixture<ProjectEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                MatCardModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatSnackBarModule,
                MatTableModule,
            ],
            declarations: [ProjectEditComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectEditComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
