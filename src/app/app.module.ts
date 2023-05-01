import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormCocktailComponent } from './components/form-cocktail/form-cocktail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileCocktailComponent } from './components/tile-cocktail/tile-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    IngredientComponent,
    FormCocktailComponent,
    TileCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
