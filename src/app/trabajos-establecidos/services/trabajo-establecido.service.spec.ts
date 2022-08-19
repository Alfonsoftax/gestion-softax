import { TestBed } from '@angular/core/testing';

import { TrabajoEstablecidoService } from './trabajo-establecido.service';

describe('TrabajoEstablecidoService', () => {
  let service: TrabajoEstablecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajoEstablecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
