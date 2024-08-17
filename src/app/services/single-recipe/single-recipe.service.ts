import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=a3a5ee991b5c408ab5b80e1cdfcf7083`;

    return this.http.get(apiUrl);
  }
  

  takeSimilarRecipes(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=a3a5ee991b5c408ab5b80e1cdfcf7083`;

    return this.http.get(apiUrl);
  }

}
