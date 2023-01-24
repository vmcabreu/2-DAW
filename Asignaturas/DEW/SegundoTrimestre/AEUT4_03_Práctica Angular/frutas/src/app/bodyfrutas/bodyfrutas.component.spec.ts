import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyfrutasComponent } from './bodyfrutas.component';

describe('BodyfrutasComponent', () => {
  let component: BodyfrutasComponent;
  let fixture: ComponentFixture<BodyfrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyfrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyfrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
