import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleColaboracionComponent } from './detalle-colaboracion.component';

describe('DetalleColaboracionComponent', () => {
  let component: DetalleColaboracionComponent;
  let fixture: ComponentFixture<DetalleColaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleColaboracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
