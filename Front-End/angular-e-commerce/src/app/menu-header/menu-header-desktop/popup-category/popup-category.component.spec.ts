import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCategoryComponent } from './popup-category.component';

describe('PopupCategoryComponent', () => {
  let component: PopupCategoryComponent;
  let fixture: ComponentFixture<PopupCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
