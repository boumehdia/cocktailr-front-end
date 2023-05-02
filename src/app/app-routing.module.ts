import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCocktailComponent } from './components/add-cocktail/add-cocktail.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { EditCocktailComponent } from './components/edit-cocktail/edit-cocktail.component';

const routes: Routes = [
  { path: '', component: CocktailsComponent },
  { path: 'cocktail-form', component: AddCocktailComponent },
   { path: 'edit/:id', component: EditCocktailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
