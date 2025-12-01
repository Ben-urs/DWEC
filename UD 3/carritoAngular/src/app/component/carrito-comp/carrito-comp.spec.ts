import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComp } from './carrito-comp';

describe('CarritoComp', () => {
  let component: CarritoComp;
  let fixture: ComponentFixture<CarritoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
