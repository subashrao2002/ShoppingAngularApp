import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authSvc: AuthService) {

    }

    storeRecipes() {
        const token = this.authSvc.getToken();
        return this.httpClient.put('https://angularrecipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
    }

    fetchRecipes() {
        const token = this.authSvc.getToken();
        return this.httpClient.get<Recipe[]>('https://angularrecipe-book.firebaseio.com/recipes.json?auth=' + token)
            .map(
                // old code used during http
                // (response: Response) => {
                //     const data: Recipe[] = response.json();
                //     for (let reci of data) {
                //         if (!reci['ingredients']) {
                //             reci['ingredients'] = [];
                //         }
                //     }
                //     return data;
                // }
                (recipes) => {
                    for (let reci of recipes) {
                        if (!reci['ingredients']) {
                            reci['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (data: Recipe[]) => {
                    this.recipeService.setRecipes(data);
                }
            );
    }
}