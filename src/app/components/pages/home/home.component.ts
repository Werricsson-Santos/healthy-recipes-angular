import { Component } from '@angular/core';
import { FoodCardComponent } from "./food-card/food-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
