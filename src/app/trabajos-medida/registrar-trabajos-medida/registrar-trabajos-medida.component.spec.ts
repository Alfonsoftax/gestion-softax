import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTrabajosMedidaComponent } from './registrar-trabajos-medida.component';

describe('RegistrarTrabajosMedidaComponent', () => {
  let component: RegistrarTrabajosMedidaComponent;
  let fixture: ComponentFixture<RegistrarTrabajosMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTrabajosMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTrabajosMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
