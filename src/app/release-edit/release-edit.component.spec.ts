import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReleaseEditComponent} from './release-edit.component';
import {
    MAT_BOTTOM_SHEET_DATA,
    MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
    MAT_DIALOG_DATA, MatBottomSheetModule,
    MatBottomSheetRef,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {HttpClientModule} from '@angular/common/http';

describe('ReleaseEditComponent', () => {
    let component: ReleaseEditComponent;
    let fixture: ComponentFixture<ReleaseEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientModule,
                MatBottomSheetModule,
                MatCardModule,
                MaterialModule,
                MatFormFieldModule,
                MatTableModule,
            ],
            declarations: [ReleaseEditComponent],
            providers: [
                {provide: MAT_DIALOG_DATA, useValue: {}},
                {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {}},
                {provide: MAT_BOTTOM_SHEET_DATA, useValue: {}},
                {provide: MatBottomSheetRef, useValue: {}},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReleaseEditComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
