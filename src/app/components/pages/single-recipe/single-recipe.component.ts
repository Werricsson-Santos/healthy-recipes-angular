import { Component } from '@angular/core';
import { MainInformationComponent } from "./main-information/main-information.component";

@Component({
  selector: 'app-single-recipe',
  standalone: true,
  imports: [MainInformationComponent],
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.css'
})
export class SingleRecipeComponent {

}
