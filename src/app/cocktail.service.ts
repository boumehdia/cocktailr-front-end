import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cocktail, Ingredient} from 'src/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly API_URL = "http://localhost:8080"
  private readonly ENDPOINT_COCKTAIL = "/cocktail"
  private readonly ENDPOINT_INGREDIENT = "/ingredient"
  constructor(private http: HttpClient) {


  }

  getCocktails(): Observable<Cocktail[]> {
    console.log(this.API_URL + this.ENDPOINT_COCKTAIL);
    return this.http.get<Cocktail[]>(this.API_URL + this.ENDPOINT_COCKTAIL);
  }
  postCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http.post<Cocktail>(this.API_URL + this.ENDPOINT_COCKTAIL, cocktail);
  }

  postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.API_URL + this.ENDPOINT_INGREDIENT, ingredient);
  }
  
  putCocktailIngredient(cocktailId: number, ingredientId: number): Observable<any> {
    return this.http.put<any>(this.API_URL + this.ENDPOINT_COCKTAIL+ '/' + cocktailId + this.ENDPOINT_INGREDIENT + '/' + ingredientId, {});
  }
  // createCocktail(cocktail: Cocktail): Observable<Cocktail> {
  //   return this.http.post<Cocktail>(this.API_URL + this.ENDPOINT_COCKTAIL, cocktail);
  // }
}
