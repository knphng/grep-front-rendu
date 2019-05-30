import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReleaseDetailsComponent} from './release-details.component';
import {
    MatCardModule,
    MatDividerModule, MatSnackBarModule
} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('ReleaseDetailsComponent', () => {
    let component: ReleaseDetailsComponent;
    let fixture: ComponentFixture<ReleaseDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MatCardModule,
                MatDividerModule,
                MatSnackBarModule,
            ],
            declarations: [ReleaseDetailsComponent],
            providers: [
                {provide: ActivatedRoute, useValue: {}},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReleaseDetailsComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
