import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoFooter } from './carrito-footer';

describe('CarritoFooter', () => {
  let component: CarritoFooter;
  let fixture: ComponentFixture<CarritoFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
