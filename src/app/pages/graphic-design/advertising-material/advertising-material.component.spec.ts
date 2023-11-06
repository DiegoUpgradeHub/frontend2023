import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingMaterialComponent } from './advertising-material.component';

describe('AdvertisingMaterialComponent', () => {
  let component: AdvertisingMaterialComponent;
  let fixture: ComponentFixture<AdvertisingMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
