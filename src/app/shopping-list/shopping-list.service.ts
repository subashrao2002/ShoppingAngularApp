import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingred: Ingredient){
        this.ingredients.push(ingred);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addMultipleIngredients(ingreds: Ingredient[]){
        this.ingredients.push(...ingreds);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}