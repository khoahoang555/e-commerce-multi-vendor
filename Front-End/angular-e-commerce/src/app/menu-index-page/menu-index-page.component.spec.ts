import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIndexPageComponent } from './menu-index-page.component';

describe('MenuIndexPageComponent', () => {
  let component: MenuIndexPageComponent;
  let fixture: ComponentFixture<MenuIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIndexPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
