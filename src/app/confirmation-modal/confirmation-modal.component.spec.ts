import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmationModalComponent} from './confirmation-modal.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';

describe('ConfirmationModalComponent', () => {
    let component: ConfirmationModalComponent;
    let fixture: ComponentFixture<ConfirmationModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatDialogModule,
            ],
            declarations: [ConfirmationModalComponent],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmationModalComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
