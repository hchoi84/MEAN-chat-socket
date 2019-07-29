import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsLoginComponent } from './chats-login.component';

describe('ChatsLoginComponent', () => {
  let component: ChatsLoginComponent;
  let fixture: ComponentFixture<ChatsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
