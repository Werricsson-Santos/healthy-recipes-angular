import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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
      const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${environment.apiKey}&number=${take}`;

      return this.http.get(apiUrl);
    } else return new Observable();
  }
}
