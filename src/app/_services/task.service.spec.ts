import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {TaskService} from './task.service';
import {MatSnackBarModule} from '@angular/material';

describe('TaskService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            MatSnackBarModule,
        ]
    }));

    it('should be created', () => {
        const service: TaskService = TestBed.get(TaskService);
        expect(service).toBeTruthy();
    });
});
