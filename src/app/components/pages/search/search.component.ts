import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../../services/search/search.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent  {
  public loading = false;
  public query: string = "";
  public foods: any = [];

  constructor(private service: SearchService) {}

  getSearch() {
    this.loading = true;
    console.log("works!")
    this.service.search(this.query).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe((data: any) => this.foods = data.results);
  }


  onEnterKey(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      console.log('tecla pressionada', event.key);
    }
  }

}
