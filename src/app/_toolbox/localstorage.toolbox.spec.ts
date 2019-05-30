import { TestBed, inject } from '@angular/core/testing';
import { LocalStorageToolBox } from './localstorage.toolbox';

describe('ParkingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageToolBox
      ]
    });
  });

  it('should be created', inject([LocalStorageToolBox], (tool: LocalStorageToolBox) => {
    expect(tool).toBeTruthy();
  }));
});
