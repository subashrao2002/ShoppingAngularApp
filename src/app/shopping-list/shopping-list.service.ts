import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingred: Ingredient){
        this.ingredients.push(ingred);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addMultipleIngredients(ingreds: Ingredient[]){
        this.ingredients.push(...ingreds);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}