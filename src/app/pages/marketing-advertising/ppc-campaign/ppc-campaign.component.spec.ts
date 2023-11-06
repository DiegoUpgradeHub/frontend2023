import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcCampaignComponent } from './ppc-campaign.component';

describe('PpcCampaignComponent', () => {
  let component: PpcCampaignComponent;
  let fixture: ComponentFixture<PpcCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpcCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpcCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
