import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartafrutaComponent } from './cartafruta.component';

describe('CartafrutaComponent', () => {
  let component: CartafrutaComponent;
  let fixture: ComponentFixture<CartafrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartafrutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartafrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
