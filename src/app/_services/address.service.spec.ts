import {TestBed} from '@angular/core/testing';

import {AddressService} from './address.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';

describe('AddressService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            MatSnackBarModule,
        ]
    }));

    it('should be created', () => {
        const service: AddressService = TestBed.get(AddressService);
        expect(service).toBeTruthy();
    });
});
