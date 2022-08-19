import { TestBed } from '@angular/core/testing';

import { TrabajosMedidaService } from './trabajos-medida.service';

describe('TrabajosMedidaService', () => {
  let service: TrabajosMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajosMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
