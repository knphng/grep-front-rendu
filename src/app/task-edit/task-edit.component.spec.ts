import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskEditComponent} from './task-edit.component';
import {FormsModule} from '@angular/forms';
import {
    MAT_BOTTOM_SHEET_DATA,
    MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
    MatBottomSheetModule,
    MatBottomSheetRef,
    MatCardModule,
    MatFormFieldModule, MatSnackBarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('TaskEditComponent', () => {
    let component: TaskEditComponent;
    let fixture: ComponentFixture<TaskEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                MatBottomSheetModule,
                MatCardModule,
                MatFormFieldModule,
                MatSnackBarModule,
            ],
            declarations: [TaskEditComponent],
            providers: [
                {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {}},
                {provide: MAT_BOTTOM_SHEET_DATA, useValue: {}},
                {provide: MatBottomSheetRef, useValue: {}},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskEditComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
