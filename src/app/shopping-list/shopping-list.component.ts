import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] 
  // =[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Oranges',10)
  // ];

  constructor(private shoppingListsvc: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListsvc.getIngredients();
    this.shoppingListsvc.ingredientsChanged.subscribe(
      (ingredientsArray :Ingredient[]) => {
        this.ingredients = ingredientsArray;
      }
    )
  }
  onIngredientAdded(ingredient: Ingredient ){
    this.ingredients.push(ingredient);
  }
}
