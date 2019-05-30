import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkspaceDetailsComponent} from './workspace-details.component';
import {HttpClientModule} from '@angular/common/http';
import {
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule, MatSnackBarModule,
    MatTableModule
} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('WorkspaceDetailsComponent', () => {
    let component: WorkspaceDetailsComponent;
    let fixture: ComponentFixture<WorkspaceDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MatGridListModule,
                MatCardModule,
                MatFormFieldModule,
                MatIconModule,
                MatPaginatorModule,
                MatSnackBarModule,
                MatTableModule,
                RouterTestingModule,
            ],
            declarations: [WorkspaceDetailsComponent],
            providers: [
                {provide: ActivatedRoute, useValue: {}},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkspaceDetailsComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
