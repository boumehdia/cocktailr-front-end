import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCocktailComponent } from './tile-cocktail.component';

describe('TileCocktailComponent', () => {
  let component: TileCocktailComponent;
  let fixture: ComponentFixture<TileCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
