import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  listRandomFood(take: number): any {
    if(isPlatformBrowser(this.platformId)) {
      const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=a3a5ee991b5c408ab5b80e1cdfcf7083&number=${take}`;

      return this.http.get(apiUrl);
    } else return new Observable();
  }
}
