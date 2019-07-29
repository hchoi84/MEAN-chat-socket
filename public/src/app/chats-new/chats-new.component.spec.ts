import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsNewComponent } from './chats-new.component';

describe('ChatsNewComponent', () => {
  let component: ChatsNewComponent;
  let fixture: ComponentFixture<ChatsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
