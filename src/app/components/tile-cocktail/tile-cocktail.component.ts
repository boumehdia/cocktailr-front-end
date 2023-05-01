import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/models/models';
import { DomSanitizer } from '@angular/platform-browser';
import { CocktailService } from 'src/app/cocktail.service';

@Component({
  selector: 'tile-cocktail',
  templateUrl: './tile-cocktail.component.html',
  styleUrls: ['./tile-cocktail.component.css']
})
export class TileCocktailComponent {
  @Input() cocktail!: Cocktail;
  constructor(public sanitizer: DomSanitizer, private cocktailService : CocktailService) {}
  deleteCocktail(cocktailId: number) {
    if (window.confirm('Are you sure you want to delete this cocktail?')) {
      this.cocktailService.deleteCocktail(cocktailId).subscribe(() => {
      location.reload();
      });
    }
  }
}
