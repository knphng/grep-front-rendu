import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatBottomSheetModule,
    MatCardModule, MatDialogRef,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule
} from '@angular/material';
import {ProjectDetailsComponent} from './project-details.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

describe('ProjectDetailsComponent', () => {
    let component: ProjectDetailsComponent;
    let fixture: ComponentFixture<ProjectDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                MatBottomSheetModule,
                MatCardModule,
                MatDividerModule,
                MatFormFieldModule,
                MatIconModule,
                MatPaginatorModule,
                MatSnackBarModule,
                MatTableModule,
                MatIconModule,
            ],
            declarations: [ProjectDetailsComponent],
            providers: [
                {provide: ActivatedRoute, useValue: {}},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectDetailsComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
