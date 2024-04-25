import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-services';
  drinks = [];

  constructor(private cocktail: CocktailService){}

  search(query: string){
    this.cocktail.search(query).subscribe((response:any)=>{
      this.drinks = response.drinks;
      //console.log(response);
      console.log(this.drinks);
    })
  }
}
