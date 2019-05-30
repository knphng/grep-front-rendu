import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerEditComponent} from './customer-edit.component';
import {
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDialogRef,
    MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef, MAT_DIALOG_DATA
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('CustomerEditComponent', () => {
    let component: CustomerEditComponent;
    let fixture: ComponentFixture<CustomerEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, MatSnackBarModule, MatCardModule, MatFormFieldModule, FormsModule, MatDialogModule, ],
            declarations: [CustomerEditComponent],
            providers: [
                {provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: {}},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerEditComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
