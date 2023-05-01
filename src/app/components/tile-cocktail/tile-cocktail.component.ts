import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/models/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tile-cocktail',
  templateUrl: './tile-cocktail.component.html',
  styleUrls: ['./tile-cocktail.component.css']
})
export class TileCocktailComponent {
  @Input() cocktail!: Cocktail;
  constructor(public sanitizer: DomSanitizer) {}
  
}
