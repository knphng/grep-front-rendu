import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkspacesListComponent} from './workspaces-list.component';
import {
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('WorkspacesListComponent', () => {
    let component: WorkspacesListComponent;
    let fixture: ComponentFixture<WorkspacesListComponent>;

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
            declarations: [
                WorkspacesListComponent,
            ],
            providers: [
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkspacesListComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
