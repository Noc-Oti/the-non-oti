import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListWrapperComponentComponent } from './events-list-wrapper-component.component';

describe('EventsListWrapperComponentComponent', () => {
  let component: EventsListWrapperComponentComponent;
  let fixture: ComponentFixture<EventsListWrapperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsListWrapperComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsListWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
