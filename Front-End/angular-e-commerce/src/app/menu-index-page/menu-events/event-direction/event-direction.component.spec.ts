import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDirectionComponent } from './event-direction.component';

describe('EventDirectionComponent', () => {
  let component: EventDirectionComponent;
  let fixture: ComponentFixture<EventDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
