import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTrabajosEstablecidosComponent } from './registrar-trabajos-establecidos.component';

describe('RegistrarTrabajosEstablecidosComponent', () => {
  let component: RegistrarTrabajosEstablecidosComponent;
  let fixture: ComponentFixture<RegistrarTrabajosEstablecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTrabajosEstablecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTrabajosEstablecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
