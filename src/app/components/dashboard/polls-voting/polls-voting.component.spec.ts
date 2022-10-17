import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsVotingComponent } from './polls-voting.component';

describe('PollsVotingComponent', () => {
  let component: PollsVotingComponent;
  let fixture: ComponentFixture<PollsVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollsVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
