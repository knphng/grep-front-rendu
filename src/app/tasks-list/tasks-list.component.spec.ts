import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TasksListComponent} from './tasks-list.component';
import {
    MatBottomSheetModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule, MatTableModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('TasksListComponent', () => {
    let component: TasksListComponent;
    let fixture: ComponentFixture<TasksListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MatCardModule,
                MatBottomSheetModule,
                MatCardModule,
                MatFormFieldModule,
                MatIconModule,
                MatPaginatorModule,
                MatSnackBarModule,
                MatTableModule,
                MatIconModule,
            ],
            declarations: [TasksListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TasksListComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
