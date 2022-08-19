import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTrabajosEstablecidosComponent } from './detalles-trabajos-establecidos.component';

describe('DetallesTrabajosEstablecidosComponent', () => {
  let component: DetallesTrabajosEstablecidosComponent;
  let fixture: ComponentFixture<DetallesTrabajosEstablecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTrabajosEstablecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTrabajosEstablecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
