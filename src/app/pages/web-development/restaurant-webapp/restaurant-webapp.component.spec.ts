import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantWebappComponent } from './restaurant-webapp.component';

describe('RestaurantWebappComponent', () => {
  let component: RestaurantWebappComponent;
  let fixture: ComponentFixture<RestaurantWebappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantWebappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
