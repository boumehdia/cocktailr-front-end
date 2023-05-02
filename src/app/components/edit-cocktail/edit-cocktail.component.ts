import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/app/cocktail.service';
import { Cocktail } from 'src/models/models';
@Component({
  selector: 'app-edit-cocktail',
  templateUrl: './edit-cocktail.component.html',
  styleUrls: ['./edit-cocktail.component.css']
})
export class EditCocktailComponent implements OnInit  {
  cocktail: Cocktail = {} as Cocktail;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {

   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 0;
    if ((id != 0)  && !isNaN(Number(id))) {
      this.cocktailService.getCocktail(Number(id)).subscribe(cocktail => {
        console.log(cocktail);
        this.cocktail = cocktail;
      });
    }
  }
}
