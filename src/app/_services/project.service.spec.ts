import {TestBed} from '@angular/core/testing';

import {ProjectService} from './project.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';

describe('ProjectService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            MatSnackBarModule,
        ]
    }));

    it('should be created', () => {
        const service: ProjectService = TestBed.get(ProjectService);
        expect(service).toBeTruthy();
    });
});
