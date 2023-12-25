import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditVeiculoComponent } from './form-edit-veiculo.component';

describe('FormEditVeiculoComponent', () => {
  let component: FormEditVeiculoComponent;
  let fixture: ComponentFixture<FormEditVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
