import {TestBed} from '@angular/core/testing';

import {WorkspaceService} from './workspace.service';
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
        const service: WorkspaceService = TestBed.get(WorkspaceService);
        expect(service).toBeTruthy();
    });
});
