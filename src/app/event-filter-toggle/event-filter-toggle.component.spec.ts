import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilterToggleComponent } from './event-filter-toggle.component';

describe('EventFilterToggleComponent', () => {
  let component: EventFilterToggleComponent;
  let fixture: ComponentFixture<EventFilterToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFilterToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
