import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-edit-cocktail',
  templateUrl: './edit-cocktail.component.html',
  styleUrls: ['./edit-cocktail.component.css']
})
export class EditCocktailComponent {
  @Input() idCocktail!: number;

}
