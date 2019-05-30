import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomersListComponent} from './customers-list.component';
import {MatCardModule, MatDialogModule, MatDialogRef, MatIconModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('CustomersListComponent', () => {
    let component: CustomersListComponent;
    let fixture: ComponentFixture<CustomersListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MatTableModule,
                MatSnackBarModule,
                MatCardModule,
                MatIconModule,
                MatDialogModule,
            ],
            declarations: [CustomersListComponent],
            providers: [
        ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomersListComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
