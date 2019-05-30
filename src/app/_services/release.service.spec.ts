import { TestBed } from '@angular/core/testing';

import { ReleaseService } from './release.service';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material";

describe('ReleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
          HttpClientModule,
          MatSnackBarModule,
      ]
  }));

  it('should be created', () => {
    const service: ReleaseService = TestBed.get(ReleaseService);
    expect(service).toBeTruthy();
  });
});
