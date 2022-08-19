import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTrabajosEstablecidosComponent } from './listado-trabajos-establecidos.component';

describe('ListadoTrabajosEstablecidosComponent', () => {
  let component: ListadoTrabajosEstablecidosComponent;
  let fixture: ComponentFixture<ListadoTrabajosEstablecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTrabajosEstablecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTrabajosEstablecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
