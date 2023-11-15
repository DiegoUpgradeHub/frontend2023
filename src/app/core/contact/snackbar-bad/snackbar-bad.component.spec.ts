import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarBadComponent } from './snackbar-bad.component';

describe('SnackbarBadComponent', () => {
  let component: SnackbarBadComponent;
  let fixture: ComponentFixture<SnackbarBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarBadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
