import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cocktail } from 'src/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_COCKTAIL = "/cocktail"
  constructor(private http: HttpClient) {


  }

  getCocktails(): Observable<Cocktail[]> {
    console.log(this.API_URL + this.ENDPOINT_COCKTAIL);
    return this.http.get<Cocktail[]>(this.API_URL + this.ENDPOINT_COCKTAIL);
  }

}
