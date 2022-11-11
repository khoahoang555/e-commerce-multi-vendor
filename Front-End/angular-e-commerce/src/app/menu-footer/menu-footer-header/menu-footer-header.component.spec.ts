import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterHeaderComponent } from './menu-footer-header.component';

describe('MenuFooterHeaderComponent', () => {
  let component: MenuFooterHeaderComponent;
  let fixture: ComponentFixture<MenuFooterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFooterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFooterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
