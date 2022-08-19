import { TestBed } from '@angular/core/testing';

import { ColaboracionesService } from './colaboraciones.service';

describe('ColaboracionesService', () => {
  let service: ColaboracionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaboracionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
