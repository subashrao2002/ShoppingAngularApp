import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    editedIngredient = new Subject<number>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredientbyId(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingred: Ingredient){
        this.ingredients.push(ingred);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        //this.getIngredientbyId[index] = newIngredient;
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addMultipleIngredients(ingreds: Ingredient[]){
        this.ingredients.push(...ingreds);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    deleteIngredient(index: number){
        this.ingredients.splice(index);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}