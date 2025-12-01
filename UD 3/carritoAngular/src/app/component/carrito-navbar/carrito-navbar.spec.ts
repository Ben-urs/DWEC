import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoNavbar } from './carrito-navbar';

describe('CarritoNavbar', () => {
  let component: CarritoNavbar;
  let fixture: ComponentFixture<CarritoNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
