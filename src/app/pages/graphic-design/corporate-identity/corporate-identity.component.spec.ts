import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateIdentityComponent } from './corporate-identity.component';

describe('CorporateIdentityComponent', () => {
  let component: CorporateIdentityComponent;
  let fixture: ComponentFixture<CorporateIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
