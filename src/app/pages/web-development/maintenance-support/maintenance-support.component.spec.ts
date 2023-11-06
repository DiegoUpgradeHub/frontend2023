import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSupportComponent } from './maintenance-support.component';

describe('MaintenanceSupportComponent', () => {
  let component: MaintenanceSupportComponent;
  let fixture: ComponentFixture<MaintenanceSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
