import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMagosComponent } from './lista-magos.component';

describe('ListaMagosComponent', () => {
  let component: ListaMagosComponent;
  let fixture: ComponentFixture<ListaMagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
