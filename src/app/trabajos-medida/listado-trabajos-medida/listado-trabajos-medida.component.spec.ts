import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTrabajosMedidaComponent } from './listado-trabajos-medida.component';

describe('ListadoTrabajosMedidaComponent', () => {
  let component: ListadoTrabajosMedidaComponent;
  let fixture: ComponentFixture<ListadoTrabajosMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTrabajosMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTrabajosMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
