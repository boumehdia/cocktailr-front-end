import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { OnInit } from '@angular/core';
import { Cocktail } from 'src/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CocktailService ]
})
export class AppComponent implements OnInit{
  title = 'cocktailr';
  cocktails: Cocktail[] = [];

  constructor(private cocktailService : CocktailService){
  }
  ngOnInit(){
    console.log("test on init...");
    this.cocktailService.getCocktails().subscribe(cocktails => {
      this.cocktails = cocktails;
    });
  }
}
