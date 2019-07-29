import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsDashboardComponent } from './chats-dashboard.component';

describe('ChatsDashboardComponent', () => {
  let component: ChatsDashboardComponent;
  let fixture: ComponentFixture<ChatsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
