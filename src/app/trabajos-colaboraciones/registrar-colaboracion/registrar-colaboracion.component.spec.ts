import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarColaboracionComponent } from './registrar-colaboracion.component';

describe('RegistrarColaboracionComponent', () => {
  let component: RegistrarColaboracionComponent;
  let fixture: ComponentFixture<RegistrarColaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarColaboracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
