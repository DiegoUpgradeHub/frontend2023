import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAdvertisingComponent } from './marketing-advertising.component';

describe('MarketingAdvertisingComponent', () => {
  let component: MarketingAdvertisingComponent;
  let fixture: ComponentFixture<MarketingAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingAdvertisingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
