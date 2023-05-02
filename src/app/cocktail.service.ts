import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cocktail, Ingredient} from 'src/models/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private readonly API_URL = "http://localhost:8080"
  private readonly ENDPOINT_COCKTAIL = "/cocktail"
  private readonly ENDPOINT_INGREDIENT = "/ingredient"
  constructor(private http: HttpClient) {


  }
  // Get all cocktails
  getCocktails(): Observable<Cocktail[]> {
    console.log(this.API_URL + this.ENDPOINT_COCKTAIL);
    return this.http.get<Cocktail[]>(this.API_URL + this.ENDPOINT_COCKTAIL);
  }
  // Get a specific cocktail
  getCocktail(id: number): Observable<Cocktail> {
    const url = `${this.API_URL}${this.ENDPOINT_COCKTAIL}/${id}`;
    return this.http.get<Cocktail[]>(url).pipe(
      map(cocktails => cocktails[0])
    );
  }
  // Add a new cocktail
  postCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http.post<Cocktail>(this.API_URL + this.ENDPOINT_COCKTAIL, cocktail);
  }
  // Delete a specific cocktail
  deleteCocktail(cocktailId: number): Observable<any> {
    const url = `${this.API_URL}${this.ENDPOINT_COCKTAIL}/${cocktailId}`;
    return this.http.delete(url);
  }
  // Add a new ingredient
  postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.API_URL + this.ENDPOINT_INGREDIENT, ingredient);
  }
  // Assign an ingredient to a cocktail
  putCocktailIngredient(cocktailId: number, ingredientId: number): Observable<any> {
    return this.http.put<any>(this.API_URL + this.ENDPOINT_COCKTAIL+ '/' + cocktailId + this.ENDPOINT_INGREDIENT + '/' + ingredientId, {});
  }

  // Update a whole cocktail object
  updateCocktail(cocktail: Cocktail): Observable<Cocktail> {
    const url = `${this.API_URL}${this.ENDPOINT_COCKTAIL}/${cocktail.id}`;
    return this.http.put<Cocktail>(url, cocktail);
  }
  // createCocktail(cocktail: Cocktail): Observable<Cocktail> {
  //   return this.http.post<Cocktail>(this.API_URL + this.ENDPOINT_COCKTAIL, cocktail);
  // }
}
