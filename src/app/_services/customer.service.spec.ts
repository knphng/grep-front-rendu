import {TestBed} from '@angular/core/testing';

import {CustomerService} from './customer.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';

describe('CustomerService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            MatSnackBarModule,
        ]
    }));

    it('should be created', () => {
        const service: CustomerService = TestBed.get(CustomerService);
        expect(service).toBeTruthy();
    });
});
