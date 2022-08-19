import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTrabajosEstablecidosComponent } from './actualizar-trabajos-establecidos.component';

describe('ActualizarTrabajosEstablecidosComponent', () => {
  let component: ActualizarTrabajosEstablecidosComponent;
  let fixture: ComponentFixture<ActualizarTrabajosEstablecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTrabajosEstablecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTrabajosEstablecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
