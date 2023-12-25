import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditClientesComponent } from './form-edit-clientes.component';

describe('FormEditClientesComponent', () => {
  let component: FormEditClientesComponent;
  let fixture: ComponentFixture<FormEditClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
