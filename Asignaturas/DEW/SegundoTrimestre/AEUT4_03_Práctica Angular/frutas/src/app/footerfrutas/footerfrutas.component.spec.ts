import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfrutasComponent } from './footerfrutas.component';

describe('FooterfrutasComponent', () => {
  let component: FooterfrutasComponent;
  let fixture: ComponentFixture<FooterfrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterfrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterfrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
