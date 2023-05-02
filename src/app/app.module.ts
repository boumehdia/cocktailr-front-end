import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { AddCocktailComponent } from './components/add-cocktail/add-cocktail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileCocktailComponent } from './components/tile-cocktail/tile-cocktail.component';
import { EditCocktailComponent } from './components/edit-cocktail/edit-cocktail.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCocktailComponent,
    TileCocktailComponent,
    EditCocktailComponent,
    CocktailsComponent,
    HeaderComponent
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