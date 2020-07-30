import { TestBed } from '@angular/core/testing';

import { SpaceImagesService } from './space-images.service';

describe('SpaceImagesService', () => {
  let service: SpaceImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
