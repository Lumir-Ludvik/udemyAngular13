import {Component} from '@angular/core';
import {Ingredient} from "../../models/shopping-list/shopping-list.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient("řízek", 1),
    new Ingredient("brambor", 5)
  ];

}
