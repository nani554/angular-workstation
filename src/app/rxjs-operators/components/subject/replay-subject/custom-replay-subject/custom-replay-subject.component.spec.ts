import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomReplaySubjectComponent } from './custom-replay-subject.component';

describe('CustomReplaySubjectComponent', () => {
  let component: CustomReplaySubjectComponent;
  let fixture: ComponentFixture<CustomReplaySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomReplaySubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
