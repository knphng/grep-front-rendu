import {TestBed} from '@angular/core/testing';

import {TeammateService} from './teammate.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';

describe('TeammateService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            MatSnackBarModule,
        ]
    }));

    it('should be created', () => {
        const service: TeammateService = TestBed.get(TeammateService);
        expect(service).toBeTruthy();
    });
});
