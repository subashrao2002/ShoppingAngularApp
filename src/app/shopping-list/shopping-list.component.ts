import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[] 
  private subscription: Subscription;
  // =[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Oranges',10)
  // ];

  constructor(private shoppingListsvc: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListsvc.getIngredients();
    this.subscription = this.shoppingListsvc.ingredientsChanged.subscribe(
      (ingredientsArray :Ingredient[]) => {
        this.ingredients = ingredientsArray;
      }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onIngredientAdded(ingredient: Ingredient ){
    this.ingredients.push(ingredient);
  }
}
