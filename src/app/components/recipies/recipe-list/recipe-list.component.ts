import {Component} from '@angular/core';
import {Recipe} from "../../../models/recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe("the first one", "just the first I have created.", "https://www.google.cz/url?sa=i&url=https%3A%2F%2Fchordify.net%2Fchords%2Fair-one-bande-annonce-the-first-one-air-one&psig=AOvVaw36zd2i-9vhK-MQPSsgn_IE&ust=1638116615852000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCID054v6uPQCFQAAAAAdAAAAABAD")
  ];

}
