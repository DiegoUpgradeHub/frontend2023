import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSolutionsComponent } from './amazon-solutions.component';

describe('AmazonSolutionsComponent', () => {
  let component: AmazonSolutionsComponent;
  let fixture: ComponentFixture<AmazonSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
