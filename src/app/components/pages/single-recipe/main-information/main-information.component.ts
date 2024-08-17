import { Component, Output, output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipeService } from '../../../../services/single-recipe/single-recipe.service';
import { CommonModule } from '@angular/common';
import { SimilarRecipesComponent } from './similar-recipes/similar-recipes.component';

@Component({
  selector: 'app-main-information',
  standalone: true,
  imports: [CommonModule, RouterLink, SimilarRecipesComponent],
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.css'
})
export class MainInformationComponent {
  public loading: boolean = true;
  public recipeId: number = 1;
  public food: any = [];

  @Output() recipeIdSimilar!: number;

  constructor(
    private service: SingleRecipeService, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getRecipeId();
    this.takeRecipe(this.recipeId);
    this.recipeIdSimilar = this.recipeId;
  }

  getRecipeId() {
    this.route.queryParams.subscribe((params: any) => {
      this.recipeId = params.id;
    });
  }

  takeRecipe(id: number) {
    this.service.takeRecipe(id).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe((data: any) => {
      this.food = data;
    });
  }
}
