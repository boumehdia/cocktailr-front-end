import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Ingredient, Cocktail } from 'src/models/models';

@Component({
  selector: 'form-cocktail',
  templateUrl: './form-cocktail.component.html',
  styleUrls: ['./form-cocktail.component.css']
})
export class FormCocktailComponent {
  cocktail: Cocktail = { id:-1, name: '', instructions: '', category: '', glass: '', imageURL: '', alcoholic: false,  ingredients : [] };
  cocktailForm : FormGroup;
  constructor() {
    this.cocktailForm = new FormGroup({
      name: new FormControl(this.cocktail.name, [Validators.required]),
      instructions: new FormControl(this.cocktail.instructions, [Validators.required]),
      category: new FormControl(this.cocktail.category, [Validators.required]),
      glass: new FormControl(this.cocktail.glass, [Validators.required]),
      imageURL: new FormControl(this.cocktail.imageURL, [Validators.required, Validators.pattern('https?://.+')]),
      alcoholic: new FormControl(this.cocktail.alcoholic),
    });
  }
  onSubmit() {
    if (this.cocktailForm.valid) {
      this.cocktail = { ...this.cocktailForm.value };
      console.log(this.cocktail);
    }
  }
}
