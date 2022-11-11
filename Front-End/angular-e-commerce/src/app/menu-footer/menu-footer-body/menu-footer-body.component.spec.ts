import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterBodyComponent } from './menu-footer-body.component';

describe('MenuFooterBodyComponent', () => {
  let component: MenuFooterBodyComponent;
  let fixture: ComponentFixture<MenuFooterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFooterBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFooterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
