import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/app/cocktail.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Cocktail, Ingredient } from 'src/models/models';

@Component({
  selector: 'app-edit-cocktail',
  templateUrl: './edit-cocktail.component.html',
  styleUrls: ['./edit-cocktail.component.css']
})
export class EditCocktailComponent implements OnInit  {
  cocktail: Cocktail = {} as Cocktail;
  cocktailForm: FormGroup;
  ingredients: FormArray;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private fb: FormBuilder
  ) {
    this.cocktailForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      instructions: [''],
      category: [''],
      glass: [''],
      alcoholic: [false],
      imageURL: [''],
      ingredients: this.fb.array([])
    });

    this.ingredients = this.cocktailForm.get('ingredients') as FormArray;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 0;
    if ((id != 0)  && !isNaN(Number(id))) {
      this.cocktailService.getCocktail(Number(id)).subscribe(cocktail => {
        console.log(cocktail);
        this.cocktail = cocktail;
        this.fillCocktailForm();
      });
    }
  }

  fillCocktailForm(): void {
    this.cocktailForm.patchValue({
      id: this.cocktail.id,
      name: this.cocktail.name,
      instructions: this.cocktail.instructions,
      category: this.cocktail.category,
      glass: this.cocktail.glass,
      alcoholic: this.cocktail.alcoholic,
      imageURL: this.cocktail.imageURL
    });

    this.cocktail.ingredients.forEach(ingredient => {
      this.addIngredientFormGroup(ingredient);
    });
  }

  addIngredientFormGroup(ingredient?: Ingredient): void {
    const ingredientFormGroup = this.fb.group({
      id: [ingredient?.id],
      name: [ingredient?.name, Validators.required],
    });

    this.ingredients.push(ingredientFormGroup);
  }

  removeIngredientFormGroup(index: number): void {
    this.ingredients.removeAt(index);
  }
  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }
  
  addIngredient(): void {
    this.addIngredientFormGroup();
  }

  onSubmit(): void {
    const cocktail: Cocktail = {
      id: this.cocktailForm.value.id,
      name: this.cocktailForm.value.name,
      instructions: this.cocktailForm.value.instructions,
      category: this.cocktailForm.value.category,
      glass: this.cocktailForm.value.glass,
      alcoholic: this.cocktailForm.value.alcoholic,
      imageURL: this.cocktailForm.value.imageURL,
      ingredients: this.cocktailForm.value.ingredients
    };

    if (cocktail.id) {
      console.log('cocktail',cocktail);
      this.cocktailService.updateCocktail(cocktail).subscribe();
    } 
  }
}