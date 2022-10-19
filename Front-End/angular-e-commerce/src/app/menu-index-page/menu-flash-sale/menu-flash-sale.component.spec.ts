import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFlashSaleComponent } from './menu-flash-sale.component';

describe('MenuFlashSaleComponent', () => {
  let component: MenuFlashSaleComponent;
  let fixture: ComponentFixture<MenuFlashSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFlashSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFlashSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
