import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsideBarComponent } from './menu-aside-bar.component';

describe('MenuAsideBarComponent', () => {
  let component: MenuAsideBarComponent;
  let fixture: ComponentFixture<MenuAsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAsideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
