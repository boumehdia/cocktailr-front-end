export interface Ingredient {
    id: number;
    name: string;
  }

  export interface Cocktail {
    id: number;
    name: string;
    instructions: string;
    category: string;
    glass: string;
    alcoholic: boolean;
    imageURL: string;
    ingredients: Ingredient[];
}
  
// export interface Cocktail {
//   name: string;
//   instructions: string;
//   category: string;
//   glass: string;
//   imageURL: string;
//   alcoholic: boolean;
// }