import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrabajosMedidaComponent } from './detalle-trabajos-medida.component';

describe('DetalleTrabajosMedidaComponent', () => {
  let component: DetalleTrabajosMedidaComponent;
  let fixture: ComponentFixture<DetalleTrabajosMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTrabajosMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTrabajosMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
