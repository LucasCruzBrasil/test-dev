import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEmpresaComponent } from './form-edit-empresa.component';

describe('FormEditEmpresaComponent', () => {
  let component: FormEditEmpresaComponent;
  let fixture: ComponentFixture<FormEditEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
