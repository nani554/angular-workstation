import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCountComponent } from './basic-count.component';

describe('BasicCountComponent', () => {
  let component: BasicCountComponent;
  let fixture: ComponentFixture<BasicCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicCountComponent]
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

describe("Basic Count", () => {
  let basicCountComponent: BasicCountComponent;
  beforeAll(() => {
    // basicCountComponent = new BasicCountComponent();
  });
  beforeEach(() => {
    basicCountComponent = new BasicCountComponent();
  });
  it("Increment Count", () => {
    let countValue = basicCountComponent.count;
    basicCountComponent.increaseCount();
    expect(basicCountComponent.count).toBe(++countValue);
  });
  it("Decrement Count", () => {
    let countValue = basicCountComponent.count;
    basicCountComponent.decreaseCount();
    console.log(countValue, basicCountComponent.count);
    const currentCountValue = countValue > 1 ? --countValue : 0;
    expect(basicCountComponent.count).toBe(currentCountValue);
  });
});