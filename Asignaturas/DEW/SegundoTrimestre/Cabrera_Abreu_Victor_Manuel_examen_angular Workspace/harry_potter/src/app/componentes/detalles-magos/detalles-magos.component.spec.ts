import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMagosComponent } from './detalles-magos.component';

describe('DetallesMagosComponent', () => {
  let component: DetallesMagosComponent;
  let fixture: ComponentFixture<DetallesMagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesMagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
