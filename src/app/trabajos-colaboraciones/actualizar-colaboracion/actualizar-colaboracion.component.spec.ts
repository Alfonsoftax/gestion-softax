import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarColaboracionComponent } from './actualizar-colaboracion.component';

describe('ActualizarColaboracionComponent', () => {
  let component: ActualizarColaboracionComponent;
  let fixture: ComponentFixture<ActualizarColaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarColaboracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
