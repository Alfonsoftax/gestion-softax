import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoColaboracionComponent } from './listado-colaboracion.component';

describe('ListadoColaboracionComponent', () => {
  let component: ListadoColaboracionComponent;
  let fixture: ComponentFixture<ListadoColaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoColaboracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
