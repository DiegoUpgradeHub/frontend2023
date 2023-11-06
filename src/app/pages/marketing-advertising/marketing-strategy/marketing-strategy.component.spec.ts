import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingStrategyComponent } from './marketing-strategy.component';

describe('MarketingStrategyComponent', () => {
  let component: MarketingStrategyComponent;
  let fixture: ComponentFixture<MarketingStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
