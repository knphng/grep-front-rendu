import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeammateDetailsComponent} from './teammate-details.component';
import {
    MatBottomSheetModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

describe('TeammateDetailsComponent', () => {
    let component: TeammateDetailsComponent;
    let fixture: ComponentFixture<TeammateDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
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
            declarations: [TeammateDetailsComponent],
            providers: [
                {provide: ActivatedRoute, useValue: {}},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeammateDetailsComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
