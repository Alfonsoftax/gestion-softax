import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTrabajosMedidaComponent } from './actualizar-trabajos-medida.component';

describe('ActualizarTrabajosMedidaComponent', () => {
  let component: ActualizarTrabajosMedidaComponent;
  let fixture: ComponentFixture<ActualizarTrabajosMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTrabajosMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTrabajosMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
