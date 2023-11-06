import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmWebappComponent } from './crm-webapp.component';

describe('CrmWebappComponent', () => {
  let component: CrmWebappComponent;
  let fixture: ComponentFixture<CrmWebappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmWebappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
