import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CocktailService } from 'src/app/cocktail.service';
import { Ingredient, Cocktail } from 'src/models/models';


@Component({
  selector: 'form-cocktail',
  templateUrl: './form-cocktail.component.html',
  styleUrls: ['./form-cocktail.component.css']
})
export class FormCocktailComponent implements OnInit {
  cocktailForm: FormGroup;

  constructor(private fb: FormBuilder, private cocktailService: CocktailService) {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      instructions: ['', Validators.required],
      category: [''],
      glass: [''],
      alcoholic: [false],
      imageURL: [''],
      ingredients: this.fb.array([this.createIngredientFormGroup()])
    });
  }

  ngOnInit() {
    // this.cocktailForm = this.fb.group({
    //   name: ['', Validators.required],
    //   instructions: ['', Validators.required],
    //   category: [''],
    //   glass: [''],
    //   alcoholic: [false],
    //   imageURL: [''],
    //   ingredients: this.fb.array([this.createIngredientFormGroup()])
    // });
  }

  createIngredientFormGroup(): FormGroup {
    return this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required]
    });
  }

  addIngredientFormGroup(): void {
    const ingredients = this.cocktailForm.get('ingredients') as FormArray;
    ingredients.push(this.createIngredientFormGroup());
  }

  removeIngredientFormGroup(index: number): void {
    const ingredients = this.cocktailForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

  onSubmit() {
    const cocktailData = this.cocktailForm.value;
    const cocktail: Cocktail = {
      id: -1,
      name: cocktailData.name,
      instructions: cocktailData.instructions,
      category: cocktailData.category,
      glass: cocktailData.glass,
      alcoholic: cocktailData.alcoholic,
      imageURL: cocktailData.imageURL,
      ingredients: cocktailData.ingredients as Ingredient[]
    };
    // this.cocktailService.addCocktail(cocktail);
    console.log('cocktail',cocktail);

    // if (this.cocktailForm.valid) {
      const ingredients = cocktail.ingredients;
      console.log('ingredients',ingredients);
      cocktail.ingredients = [];
      this.cocktailService.postCocktail(cocktail).subscribe((response) => {
        const cocktailId = response.id; // extract the id of the newly created cocktail
        console.log('Cocktail ', cocktailId,' created');
        if (ingredients.length > 0) {
          ingredients.forEach((ing: Ingredient) => {
            this.cocktailService.postIngredient(ing).subscribe(ingredient => {
              console.log('Ingredient ', ingredient.id,' created');
              this.cocktailService.putCocktailIngredient(cocktailId, ingredient.id).subscribe(() => {
                console.log('Ingredient ', ingredient.id,' added to cocktail ',cocktailId);
              });
            });
          });
        }
      },(errorResponse) => {
        const errorMessage = errorResponse.error.message;
        console.log(errorMessage);
        alert(errorMessage);
      }
      );
    // }

  }
}

