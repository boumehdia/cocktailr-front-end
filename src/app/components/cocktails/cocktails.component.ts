import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Cocktail } from 'src/models/models';
import { CocktailService } from 'src/app/cocktail.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileCocktailComponent } from '../tile-cocktail/tile-cocktail.component';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit{
  title = 'cocktailr';
  cocktails: Cocktail[] = [];
  searchValue: string = "";
  filteredCocktails: Cocktail[] = [];

isSearched = false;

  constructor(private cocktailService : CocktailService){
  }
  ngOnInit(){
    this.cocktailService.getCocktails().subscribe(cocktails => {
      this.cocktails = cocktails;
      this.filteredCocktails = cocktails;
    });
  }
  filterCocktails(){
    this.isSearched = true;
    this.filteredCocktails = this.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
  reset() {
    this.searchValue = '';
    this.isSearched = false;
    this.filterCocktails();
  }
}
