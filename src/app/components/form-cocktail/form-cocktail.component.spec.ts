import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCocktailComponent } from './form-cocktail.component';

describe('FormCocktailComponent', () => {
  let component: FormCocktailComponent;
  let fixture: ComponentFixture<FormCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
