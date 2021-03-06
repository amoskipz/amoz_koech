import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubCalendarComponent } from './github-calendar.component';

describe('GithubCalendarComponent', () => {
  let component: GithubCalendarComponent;
  let fixture: ComponentFixture<GithubCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
