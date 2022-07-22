import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCountComponent } from './basic-count.component';

describe('BasicCountComponent', () => {
  let component: BasicCountComponent;
  let fixture: ComponentFixture<BasicCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
