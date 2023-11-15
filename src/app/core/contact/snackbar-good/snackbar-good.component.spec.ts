import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarGoodComponent } from './snackbar-good.component';

describe('SnackbarGoodComponent', () => {
  let component: SnackbarGoodComponent;
  let fixture: ComponentFixture<SnackbarGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarGoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
