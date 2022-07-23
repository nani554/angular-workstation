import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicForkJoinComponent } from './basic-fork-join.component';

describe('BasicForkJoinComponent', () => {
  let component: BasicForkJoinComponent;
  let fixture: ComponentFixture<BasicForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicForkJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
