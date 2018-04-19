import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pan Cake','delicious round baked bread','https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg'),
    new Recipe('Bake Cake','Sweet round baked bread','https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg'),
  ];
  @Output() selectedRecipe4Detail = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipe(recipesel :Recipe){
    this.selectedRecipe4Detail.emit(recipesel);
  }
}
