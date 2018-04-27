import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    constructor(private shoppingListSvc: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('Pan Cake', 'delicious round baked bread',
            'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg',
            [
                new Ingredient('Pan',1),
                new Ingredient('cake',10)
            ]),
        new Recipe('Bake Cake', 'Sweet round baked bread',
            'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg',
            [
                new Ingredient('Bake',1),
                new Ingredient('Dough',10)
            ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredients(ingredients: Ingredient[]){
        this.shoppingListSvc.addMultipleIngredients(ingredients);
    }
}