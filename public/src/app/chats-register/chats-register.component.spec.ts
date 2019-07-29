import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsRegisterComponent } from './chats-register.component';

describe('ChatsRegisterComponent', () => {
  let component: ChatsRegisterComponent;
  let fixture: ComponentFixture<ChatsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
