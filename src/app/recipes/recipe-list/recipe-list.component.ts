import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  //  = [
  //   new Recipe('Pan Cake','delicious round baked bread','https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg'),
  //   new Recipe('Bake Cake','Sweet round baked bread','https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg'),
  // ];
  // @Output() selectedRecipe4Detail = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (updatedRecipes: Recipe[]) => {
        this.recipes = updatedRecipes;
      }
    );
  }
  // onSelectedRecipe(recipesel :Recipe){
  //   this.selectedRecipe4Detail.emit(recipesel);
  // }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
