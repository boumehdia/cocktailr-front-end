// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
// import { CocktailService } from 'src/app/cocktail.service';

// import { Ingredient, Cocktail } from 'src/models/models';

// @Component({
//   selector: 'form-cocktail',
//   templateUrl: './form-cocktail.component.html',
//   styleUrls: ['./form-cocktail.component.css']
// })
// export class FormCocktailComponent {
//   cocktail: Cocktail = { id:-1, name: '', instructions: '', category: '', glass: '', imageURL: '', alcoholic: false,  ingredients : [] };
//   cocktailForm : FormGroup;
//   constructor(private cocktailService : CocktailService, private fb: FormBuilder){
//     this.cocktailForm = new FormGroup({
//       name: new FormControl(this.cocktail.name, [Validators.required]),
//       instructions: new FormControl(this.cocktail.instructions, [Validators.required]),
//       category: new FormControl(this.cocktail.category, [Validators.required]),
//       glass: new FormControl(this.cocktail.glass, [Validators.required]),
//       imageURL: new FormControl(this.cocktail.imageURL, [Validators.required, Validators.pattern('https?://.+')]),
//       alcoholic: new FormControl(this.cocktail.alcoholic),
//       ingredients: this.fb.array([])
//     });
//   }

//   createIngredient(): FormGroup {
//     return this.fb.group({
//       name: ['', Validators.required],
//     });
//   }

//   get ingredients() {
//     return this.cocktailForm.get('ingredients') as FormArray;
//   }

//   addIngredient() {
//     this.ingredients.push(this.createIngredient());
//   }

//   removeIngredient(index: number) {
//     (this.cocktailForm.get('ingredients') as FormArray).removeAt(index);
//   }

//   // onSubmit() {
//   //   if (this.cocktailForm.valid) {
//   //     this.cocktail = { ...this.cocktailForm.value };
//   //     console.log(this.cocktail);
//   //     this.cocktailService.postCocktail(this.cocktail).subscribe(response => {
//   //       const cocktailId = response.id; // extract the id of the newly created cocktail
//   //       const ingredientName = this.cocktailForm?.controls['ingredientName']?.value;
//   //       if (ingredientName) {
//   //         this.cocktailService.postIngredient({ id:-1, name: ingredientName }).subscribe(ingredient => {
//   //           this.cocktailService.putCocktailIngredient(cocktailId, ingredient.id).subscribe(() => {
//   //             console.log('Ingredient added to cocktail');
//   //           });
//   //         });
//   //       }
        
//   //     });
//   //   }
//   // }

//   onSubmit() {
//     if (this.cocktailForm.valid) {
//       this.cocktail = { ...this.cocktailForm.value };
//       console.log(this.cocktail);
//       this.cocktailService.postCocktail(this.cocktail).subscribe(response => {
//         const cocktailId = response.id; // extract the id of the newly created cocktail
//         const ingredients = this.cocktailForm.get('ingredients')?.value;
//         if (ingredients.length > 0) {
//           ingredients.forEach((ingredient: string) => {
//             this.cocktailService.postIngredient({ id: -1, name: ingredient }).subscribe(ingredient => {
//               this.cocktailService.putCocktailIngredient(cocktailId, ingredient.id).subscribe(() => {
//                 console.log('Ingredient added to cocktail');
//               });
//             });
//           });
//         }
//       });
//     }
//   }
// }

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
      this.cocktailService.postCocktail(cocktail).subscribe(response => {
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
      });
    // }

  }
}

